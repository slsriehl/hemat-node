const models = require('../models');

const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');

const moment = require('moment');
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
		console.log(req.params);
		return models.ResetTokens
		.findOne({
			attributes: ['code', 'valid', 'expiresAt'],
			where: {
				code: req.params.code
			}
		})
		.then((data) => {
			console.log(data);
			const isNotExpired = moment(data.dataValues.expiresAt).isAfter();
			if(data.dataValues.valid && isNotExpired) {
				res.render('login/reset.hbs', {
					code: req.params.code
				});
			} else {
				res.render('login/reset-request.hbs', {
					messages: [{
						text: 'Sorry, this reset link is expired.  Please request another and use it within 24 hours.',
						id: 'expired-reset-request-on-load'
					}]
				});
			}
		})
	},
	resetPassword: (req, res) => {
		console.log(req.body);
		console.log(req.params);
		return models.ResetTokens
		.findOne({
			attributes: ['userId', 'valid', 'used', 'expiresAt'],
			where: {
				code: req.params.code
			}
		})
		.then((data) => {
			console.log(data);
			req.session.user = data.dataValues.userId;
			const isNotExpired = moment(data.dataValues.expiresAt).isAfter();
			if(data.dataValues.valid && !data.dataValues.used && isNotExpired) {
				return models.Users
				.update({
					password: helpers.setHash(req.body.password),
					requireReset: false
				}, {
					where: {
						id: req.session.user
					}
				})
				.then((data) => {
					console.log(data);
					const dataStr = JSON.stringify(data);
					if(dataStr === '[1]') {
						console.log(data);
						req.session.message = 'Password successfully reset!';
						req.session.messageType = 'successful-reset';
						req.session.reset = false;
						cookieHelpers.verifyCookie(req, res, true);
						req.session.save();
						return models.ResetTokens
						.update({
							valid: false,
							used: true
						}, {
							where: {
								code: req.params.code
							}
						})
						.then((result) => {
							console.log(result);
							return models.Users
							.findOne({
								attributes: ['firstname'],
								where: {
									id: req.session.user
								}
							})
						})
						.then((something) => {
							req.session.firstname = something.dataValues.firstname;
							req.session.save();
							helpers.getSystemMessages(req, res, 'index.hbs');
						});

					} else {
						res.render('login/reset-request.hbs', {
							messages: [{
								text: encode('Sorry, we were unable to record your new password.  Please try again or <a href="/mail">contact our admin</a>.'),
								id: 'expired-reset-request-on-load'
							}]
						});
					}
				});
			} else {
				res.render('login/reset-request.hbs', {
					messages: [{
						text: 'Sorry, this reset link is expired.  Please request another and use it within 24 hours.',
						id: 'expired-reset-request-on-try'
					}]
				});
			}
		})
	},

}

module.exports = controller;
