const models = require('../models');

const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');

const escape = require('escape-html');

const controller = {
	lookupReset: (req, res) => {
		console.log(req.body);
		models.Users
		.findOne({
			attributes: ['id', 'firstname'],
			where: {
				$or: {
					username: req.body.credential,
					email: req.body.credential
				}
			}
		})
		.then((data) => {
			if(data.length === 0) {
				res.render('login/reset-request.hbs', {
					message: [{
						text: "That email or username wasn't found.  Please try again.",
						id: "reset-request-fail"
					}]
				});
			} else {
				req.session.user = data.dataValues.id;
				helpers.sendResetEmail(req, res);
			}
		})
		.catch(error => console.log(error));
	},
	showResetPage: (req, res) => {

	},
	resetPassword: (req, res) => {

	},

}

module.exports = controller;
