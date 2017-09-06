
const models = require('../models');
const generalHelpers = require('./general-helpers');
const cookieHelpers = require('./cookie-helpers');
const helpers = require('./reports-helpers');

const Promise = require('bluebird');

const moment = require('moment');

const util = require('util');

const controller = {
	receiveReport: (req, res) => {
		console.log(req.body);
		const prelimObjToSave = {
			userId: req.session.user,
			appId: req.session.app,
			referenceId: req.body.referenceId,
			newCaseRef: req.body.newCaseRef,
			singleSection: req.body.singleSection //,
			// comments: req.body.comments,
			// micro: req.body.micro,
			// finals: req.body.finals,
			// gross: req.body.gross,
			// cbcData: req.body.cbcData,
			// diff: req.body.diff,
			// diffPercent: req.body.diffPercent,
			// serologic: req.body.serologic,
			// ihcTable: req.body.ihcTable
		}
		console.log('prelim obj to save' + util.inspect(prelimObjToSave));
		if(prelimObjToSave.referenceId == 0) {
			prelimObjToSave.referenceId = null;
		}
		const almostObjToSave = generalHelpers.cleanObj(prelimObjToSave);
		const myAttributes = generalHelpers.generateKeyArr(almostObjToSave);
		console.log('almost obj to save' + util.inspect(almostObjToSave));
		console.log(myAttributes);
		if(cookieHelpers.verifyCookie(req, res)) {
			controller.memberReportPromise(req, res, almostObjToSave, myAttributes);
		} else {
			res.send("You can't PDF reports unless you're logged in.")
			//controller.guestReportPromise(req, res, almostObjToSave);
		}
	},
	memberReportPromise: (req, res, almostObjToSave, myAttributes) => {

		//append error message on the front end if nothing is sent or there is no singleSection or comments and don't make the ajax call
		//trim and escape in generalHelpers.cleanObj
		let editedAttributes = [];
		for(let i = 0; i < myAttributes.length; i++) {
			if (myAttributes[i] != 'newCaseRef') {
				editedAttributes.push(myAttributes[i]);
			}
		}
		return helpers.saveAndAddCaseReference(req, res, almostObjToSave)
		.then((objToSave) => {
			console.log(objToSave);
			return models.Reports
			.create(objToSave)
		})
		.then((data) => {
			console.log(data);
			req.session.report = data.dataValues.id;
			console.log('my attributes just before pulling report' + util.inspect(myAttributes));
			const attrWithTime = [...editedAttributes, 'createdAt'];
			console.log('attrWithTime' + attrWithTime);
			return helpers.pullReport(req, res, attrWithTime)
		})
		.then((data) => {
			console.log(data);
			console.log(util.inspect(data.dataValues.User.dataValues));
			console.log(editedAttributes);
			return helpers.createReportObj(req, res, editedAttributes, data)
		})
		.then((reportObj) => {
			console.log(reportObj);
			return helpers.pdfReport(req, res, reportObj)
		})
		.then((success) => {
			if(success) {
				return models.Reports
				.update({
					pdfName: req.session.pdf
				}, {
					where: {
						id: req.session.report
					}
				})
			} else {
				res.send('failure');
			}
		})
		.then((data) => {
			console.log(data.toString());
			if(data.toString() === '0') {
				res.send('failure');
			} else {
				console.log(data);
				res.json({
					report: req.session.report
				});
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send('failure');
		});
	},
	guestReportPromise: (req, res, almostObjToSave) => {
		let finalReportObj = {
			reference: almostObjToSave.newCaseRef
		}
		delete almostObjToSave.newCaseRef;
		return helpers.getAppName(req)
		.then((result) => {
			finalReportObj.appName = result.appName;
			finalReportObj.appSlug = result.appSlug;
			delete almostObjToSave.appId;
			return helpers.unloggedInReportObj(req, almostObjToSave)
		})
		.then((reportObj) => {
			finalReportObj.reportFields = reportObj;
			return helpers.pdfReport(req, res, finalReportObj)
		})
		.then((success) => {
			if(success) {
				return models.GuestReports
				.create({
					pdfName: req.session.pdf
				})
			} else {
				res.send('failure');
			}
		})
		.then((data) => {
			if(data == null) {
				res.send('failure');
			} else {
				req.session.report = data.dataValues.id;
				console.log(data);
				res.json({
					guestReport: req.session.report
				});
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send('failure');
		});
	},
	downloadReport: (req, res) => {
		console.log(req.params);
		return models.Reports
		.findOne({
			attributes: ['pdfName'],
			where: {
				id: req.params.report
			}
		})
		.then((data) => {
			req.session.pdf = data.dataValues.pdfName;
			var pdf = generalHelpers.resolvePath(`reports/${req.session.user}/${req.session.pdf}`);
			var mimetype = generalHelpers.mimeLookup(req.session.pdf);
			res.setHeader('Content-disposition', `attachment; filename=${req.session.pdf}`);
			res.setHeader('Content-type', mimetype);
			return helpers.createReadStream(pdf)
		})
		.then((success) => {
			success.pipe(res);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send('failure');
		});
	},
	downloadGuest: (req, res) => {
		console.log(req.params);
		return models.GuestReports
		.findOne({
			attributes: ['pdfName'],
			where: {
				id: req.params.report
			}
		})
		.then((data) => {
			req.session.pdf = data.dataValues.pdfName;
			var pdf = generalHelpers.resolvePath(`reports/guest/${req.session.pdf}`);
			var mimetype = generalHelpers.mimeLookup(req.session.pdf);
			res.setHeader('Content-disposition', `attachment; filename=${req.session.pdf}`);
			res.setHeader('Content-type', mimetype);
			return helpers.createReadStream(pdf)
		})
		.then((success) => {
			success.pipe(res);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send('failure');
		});
	},
	reportHistory: (req, res) => {
		return helpers.getReports(req, res)
		.then((data) => {
			console.log(data);
			let reportArr = [];
			for(let i = 0; i < data.length; i++) {
				const dataObj = {
					reportId: data[i].dataValues.id,
					appName: data[i].dataValues.App.dataValues.name,
					date: moment(data[i].dataValues.createdAt).format('YYYY-MM-DD HH:mm:ss UTC')
				}
				let tempText;
				if(data[i].dataValues.singleSection) {
					tempText = generalHelpers.removeLineBreaks(data[i].dataValues.singleSection);
					dataObj.text = tempText;
				}
				// } else if (data[i].dataValues.comments) {
				// 	tempText = generalHelpers.removeLineBreaks(data[i].dataValues.comments);
				// 	dataObj.text = tempText;
				// } else if(data[i].dataValues.ihcTable) {
				// 	tempText = generalHelpers.removeLineBreaks(data[i].dataValues.ihcTable);
				// 	dataObj.text = tempText;
				// } else {
				// 	dataObj.text = '';
				// }
				if(data[i].dataValues.CaseReference) {
					dataObj.reference = data[i].dataValues.CaseReference.dataValues.reference;
				}
				const cleanDataObj = generalHelpers.cleanObj(dataObj);
				reportArr.push(cleanDataObj);
			}
			console.log(reportArr);
			return Promise.resolve(reportArr);
		})
		.then((data) => {
			res.render('login/all-reports.hbs', {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				},
				specificScripts: [
					"/js/all-reports.js"
				],
				reports: data
			});
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
		});
	},
	copyReport: (req, res) => {
		let copyReport;
		let anyReports;
		let prevReps;
		console.log(req.params);
		req.session.report = req.params.id;
		//first return the stuff needed for just this report to copy
		return helpers.findCopyReport(req)
		.then((result) => {
			copyReport = result;
			//then return the stuff from any reports
			return helpers.getAnyReports(req)
		})
		.then((result) => {
			anyReports = result;
			if (result == null) {
				//if there are no reports pass the null value on for prevReps instead of doing the call to the db for prevReps
				return Promise.resolve(result);
			} else {
				return helpers.getPreviousReports(req)
			}
		})
		.then((result) => {
			prevReps = result;
			res.render('login/copy-paste.hbs', {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				},
				//specificScripts: scripts,
				report: copyReport,
				prevRep: {
					any: anyReports,
					thisApp: prevReps
				}
			});
		})
	},
}

module.exports = controller;
