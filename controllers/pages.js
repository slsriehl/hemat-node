
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const helpers = require('./pages-helpers');

const models = require('../models');

const util = require('util');

const Promise = require('bluebird');

//const userHelpers = require('./user-helpers');

const controller = {
	userWall: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			return helpers.getAppId(req)
			.then((result) => {
				req.session.app = result.dataValues.id;
			})
			.then((result) => {
				//execute three database calls in parallel
				return Promise.all([helpers.getCaseReferences(req), helpers.getAnyReports(req), helpers.getPreviousReports(req)])
			})
			.then((result) => {
				//sanitize case reference object
				const myRefs = [];
				for(let i = 0; i < result[0].length; i++) {
					const oneRef = {
						id: result[0][i].dataValues.id,
						text: result[0][i].dataValues.reference
					}
					myRefs.push(oneRef);
				}
				console.log('all cases' + util.inspect(myRefs));

				//check if there are any reports
				let anyResults;
				if(result[1] == null) {
					anyResults = false;
				} else {
					anyResults = true;
				}
				console.log('any results ' + anyResults);

				//sanitize the results of the reports that are from this app
				console.log(result[2]);
				let thisApp = [];
				for(let i = 0; i < result[2].length; i++) {
					const oneReport = {
						date: result[2][i].dataValues.createdAt,
						reportId: result[2][i].dataValues.id,
						appSlug: result[2][i].dataValues.App.dataValues.slug,
						appGroupSlug: result[2][i].dataValues.App.dataValues.AppGroup.dataValues.slug
					}
					if(result[2][i].dataValues.CaseReference) {
						oneReport.reference = result[2][i].dataValues.CaseReference.dataValues.reference;
					}
					let text;
					if(result[2][i].dataValues.singleSection) {
						text = result[2][i].dataValues.singleSection;
					} else {
						text = result[2][i].dataValues.comments;
					}
					oneReport.text = generalHelpers.removeLineBreaks(text);
					console.log(oneReport);
					thisApp.push(oneReport);
				}
				console.log('this app' + thisApp);
				//render the products
				res.render(renderPath, {
					messages: req.session.systemMessages,
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					},
					specificScripts: scripts,
					cases: myRefs,
					prevRep: {
						any: anyResults,
						thisApp: thisApp
					}
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
