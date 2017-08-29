
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const helpers = require('./pages-helpers');
const reportsHelpers = require('./reports-helpers');

const models = require('../models');

const util = require('util');

const Promise = require('bluebird');

//const userHelpers = require('./user-helpers');

const controller = {
	userWall: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			let myRefs;
			let anyReports;
			let prevReps;
			let ihcPresets;
			return helpers.getAppId(req)
			.then((result) => {
				req.session.app = result.dataValues.id;
				if(req.session.app === 12) {
					return helpers.getIhcPresets(req)
				} else {
					return Promise.resolve(null)
				}
			})
			.then((result) => {
				//set
				ihcPresets = result;
				//get case references
				return helpers.getCaseReferences(req)
				// return Promise.all([helpers.getCaseReferences(req), reportsHelpers.getAnyReports(req), reportsHelpers.getPreviousReports(req)])
			})
			.then((result) => {
				//set the results of case references equal to a var
				myRefs = result;
				return Promise.resolve(true);
			})
			.then((result) => {
				//check if the user has any reports
				return reportsHelpers.getAnyReports(req)
			})
			.then((result) => {
				anyReports = result;
				if(result == null) {
					//this will set the value for previous reports to null is there aren't any reports at all
					return Promise.resolve(null);
				} else {
					return reportsHelpers.getPreviousReports(req)
				}
			})
			.then((result) => {
				prevReps = result;
				res.render(renderPath, {
					messages: req.session.systemMessages,
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					},
					specificScripts: scripts,
					cases: myRefs,
					prevRep: {
						any: anyReports,
						thisApp: prevReps
					},
					ihcPresets: ihcPresets
				});
			})
			.catch(error => console.log(error));
		} else {
			res.render('index.hbs', {
				messages: [{
					text: 'You need an account to access that resource.  <a href="/user/signup">Sign up</a>.',
					id: `access-denied-${renderPath}`
				}]
			});
		}
	},
	openAccess: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			controller.userWall(req, res, renderPath, scripts);
		} else {
			res.render(renderPath, {
				specificScripts: scripts
			});
		}
	}
}

module.exports = controller;
