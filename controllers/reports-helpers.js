
const models = require('../models');

//++++++ Promises ++++++
const Promise = require('bluebird');

const generalHelpers = require('./general-helpers');

const util = require('util');
const fs = Promise.promisifyAll(require('fs'));


//++++++ time generation ++++++
const moment = require('moment');
//const timezone = require('moment-timezone');

//++++++ PDFing ++++++
const pdf = require('handlebars-pdf');
const pdfTemplate = require('../views/pdfs/2017-08-pdf-template');

//++++++ functions ++++++
const helpers = {
	saveAndAddCaseReference: (req, res, saveObj) => {
		console.log('saveObj from saveAndAddCaseReference' + util.inspect(saveObj));
		if(!saveObj.referenceId && req.body.newCaseRef) {
			return models.CaseReferences
			.findAll({
				where: {
					reference: req.body.newCaseRef,
					userId: req.session.user
				}
			})
			.then((data) => {
				console.log(data);
				if(data.length === 0) {
					return models.CaseReferences
					.create({
						reference: req.body.newCaseRef,
						userId: req.session.user
					})
					.then((result) => {
						console.log(`result ${util.inspect(result)}`);
						saveObj.referenceId = result.dataValues.id;
						return Promise.resolve(saveObj);
					})
					.catch(error => {
						console.log(error);
						return Promise.reject(error);
					});
				}
			})
		} else {
			return Promise.resolve(saveObj);
		}
	},
	pullReport: (req, res, attrArr) => {
		return models.Reports
		.findOne({
			attributes: attrArr,
			where: {
				id: req.session.report
			},
			include: [{
				model: models.Users,
				attributes: ['firstname', 'lastname']
			}, {
				model: models.CaseReferences,
				attributes: ['reference']
			}, {
				model: models.Apps,
				attributes: ['name', 'slug']
			}]
		})
	},
	createReportObj: (req, res, attrArr, data) => {
		console.log(data);
		//create an object with the report fields
		console.log(attrArr);
		const arrFields = [];
		const reportFields = attrArr.reduce((obj, name) => {
			obj = {
				'name': name,
				text: data.dataValues[name]
			}
			if (name == 'singleSection') {
				obj.name = false;
			}
			arrFields.push(obj);
			return obj;
		}, 0);
		const baseReport = {
			reportFields: arrFields
		}
		console.log(baseReport);
		//add the fields for the first and last name, the reference, and the app name and slug
		const finalReportObj = Object.assign(baseReport, {
			createdAt: data.dataValues.createdAt,
			firstname: data.dataValues.User.dataValues.firstname,
			lastname: data.dataValues.User.dataValues.lastname,
			appName: data.dataValues.App.dataValues.name,
			appSlug: data.dataValues.App.dataValues.slug
		});
		if(data.dataValues.CaseReference) {
			finalReportObj.reference = data.dataValues.CaseReference.dataValues.reference;
		}
		console.log(finalReportObj);
		if(finalReportObj) {
			return Promise.resolve(finalReportObj);
		} else {
			return Promise.reject("report wasn't created");
		}
	},
	pdfReport: (req, res, finalReportObj) => {
		const myUserPath = generalHelpers.resolvePath(`reports/${req.session.user}`);
		console.log('myUserPath' + myUserPath);
		console.log('the function' + helpers.directory(myUserPath));
		return helpers.directory(myUserPath)
		.then(() => {
			console.log('helpers directory is true');
			req.session.pdf = `${moment().utc().format('YYYYMMDDHHmmss')}-${finalReportObj.appSlug}.pdf`;
			const report = {
				template: pdfTemplate,
				context: {
					report: [finalReportObj]
				},
				path: `${myUserPath}/${req.session.pdf}`
			}
			return pdf.create(report)
		})
		.catch(error => {
			console.log(error);
			return Promise.reject('pdf create fail');
		})
	},
	directory: (pathToUserDir) => {
		console.log('process.cwd()' + process.cwd());
		return fs.statAsync(pathToUserDir)
		.then((stats) => {
			console.log(stats);
			return Promise.resolve(true);
		})
		.catch(error => {
			console.log(error);
			return fs.mkdirAsync(pathToUserDir)
			.then((e) => {
				console.log(e.code);
				if(!e || e.code === 'EEXIST') {
					return Promise.resolve(true);
				} else {
					console.log(util.inspect(e) + 'there was a problem creating the folder')
					return Promise.reject(false);
				}
			})
		})
	},
	createReadStream: (file) => {
		return fs.createReadStream(file)
	}

}


module.exports = helpers;
