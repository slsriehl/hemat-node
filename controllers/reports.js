
const models = require('../models');
const generalHelpers = require('./general-helpers');
const helpers = require('./reports-helpers');

const util = require('util');

const controller = {
	receiveReport: (req, res) => {
		console.log(req.body);
		//append error message on the front end if nothing is sent or there is no singleSection or comments and don't make the ajax call
		const prelimObjToSave = {
			userId: req.session.user,
			appId: req.body.appId,
			referenceId: req.body.referenceId,
			singleSection: req.body.singleSection,
			comments: req.body.comments,
			micro: req.body.micro,
			finals: req.body.finals,
			gross: req.body.gross,
			cbcData: req.body.cbcData,
			diff: req.body.diff,
			diffPercent: req.body.diffPercent,
			serologic: req.body.serologic
		}
		const myAttributes = [];
		console.log('prelim obj to save' + util.inspect(prelimObjToSave));
		if(prelimObjToSave.referenceId == 0) {
			prelimObjToSave.referenceId = null;
		}
		const almostObjToSave = generalHelpers.cleanObj(prelimObjToSave, myAttributes);
		console.log('almost obj to save' + util.inspect(almostObjToSave));
		console.log(myAttributes);
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
			const attrWithTime = [...myAttributes, 'createdAt'];
			console.log('attrWithTime' + attrWithTime);
			return helpers.pullReport(req, res, attrWithTime)
		})
		.then((data) => {
			console.log(util.inspect(data.dataValues.User.dataValues));
			console.log(myAttributes);
			return helpers.createReportObj(req, res, myAttributes, data)
		})
		.then((reportObj) => {
			console.log(reportObj);
			return helpers.pdfReport(req, res, reportObj)
		})
		.then((success) => {
			console.log(success);
		})
		.catch(error => console.log(error));
	}
}

module.exports = controller;
