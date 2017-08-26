
const cookieHelpers = require('./cookie-helpers');
const helpers = require('./pages-helpers');

const models = require('../models');

const util = require('util');

//const userHelpers = require('./user-helpers');

const controller = {
	userWall: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			helpers.getCaseReferences(req, res, renderPath, scripts);
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
			helpers.getCaseReferences(req, res, renderPath, scripts);
		} else {
			res.render(renderPath, {
				specificScripts: scripts
			});
		}
	}
}

module.exports = controller;
