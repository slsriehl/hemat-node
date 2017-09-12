const models = require('../models');

const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');

const util = require('util');
const uuid = require('uuid/v4');
const moment = require('moment');
const nodemailer = require('nodemailer');

const Promise = require('bluebird');

const transporter = require('./transporter');

let from;
if(process.env.EMAIL_FROM) {
	from = process.env.EMAIL_FROM;
} else {
	from = require('../config/from');
}

const controller = {
	lookupReset: (req, res) => {
		console.log(req.body);
		models.Users
		.findOne({
			attributes: ['id'],
			where: {
				$or: [{
					username: req.body.credential.trim().toLowerCase()
				}, {
					email: req.body.credential.trim().toLowerCase()
				}]
			}
		})
		.then((data) => {
			console.log(data);
			if(data == null) {
				console.log('data is null');
				res.render('login/reset-request.hbs', {
					messages: [{
						text: "That email or username wasn't found.  Please try again.",
						id: "reset-request-fail"
					}],
					specificScripts: [
						"/js/login-settings.js"
					]
				});
			} else {
				controller.sendResetEmail(req, res, data.dataValues.id);
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
		});
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
					code: req.params.code,
					specificScripts: [
						"/js/login-settings.js"
					]
				});
			} else {
				res.render('login/reset-request.hbs', {
					messages: [{
						text: 'Sorry, this reset link is expired.  Please request another and use it within 24 hours.',
						id: 'expired-reset-request-on-load'
					}],
					specificScripts: [
						"/js/login-settings.js"
					]
				});
			}
		})
	},
	resetPassword: (req, res) => {
		let userObjTemp;
		console.log(req.body);
		console.log(req.params);
		return models.ResetTokens
		.findOne({
			attributes: ['valid', 'used', 'expiresAt'],
			where: {
				code: req.params.code
			},
			include: [{
				model: models.Users,
				attributes: ['id', 'firstname']
			}]
		})
		.then((data) => {
			console.log(data);
			const isNotExpired = moment(data.dataValues.expiresAt).isAfter();
			if(data.dataValues.valid && !data.dataValues.used && isNotExpired) {
				userObjTemp = data.dataValues.User.dataValues;
				console.log(userObjTemp);
				return Promise.resolve(userObjTemp);
			} else {
				res.render('login/reset-request.hbs', {
					messages: [{
						text: 'Sorry, this reset link is expired.  Please request another and use it within 24 hours.',
						id: 'expired-reset-request-on-try'
					}],
					specificScripts: [
						"/js/login-settings.js"
					]
				});
			}
		})
		.then((data) => {
			return models.Users
			.update({
				password: helpers.setHash(req.body.password.trim()),
				requireReset: false
			}, {
				where: {
					id: data.id
				}
			})
		})
		.then((data) => {
			console.log(data);
			const dataStr = JSON.stringify(data);
			if(dataStr === '[1]') {
				return Promise.resolve(userObjTemp);
			} else {
				res.render('login/reset-request.hbs', {
					messages: [{
						text: 'Sorry, we were unable to record your new password.  Please try again or <a href="/mail">contact our admin</a>.',
						id: 'expired-reset-request-on-load'
					}],
					specificScripts: [
						"/js/login-settings.js"
					]
				});
			}
		})
		.then((data) => {
			console.log(data);
			req.session.message = 'Password successfully reset!';
			req.session.messageType = 'successful-reset';
			req.session.user = data.id;
			req.session.firstname = data.firstname;
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
		})
		.then((result) => {
			console.log(result);
			helpers.getSystemMessages(req, res, 'index.hbs');
		})
	},
	sendResetEmail: (req, res, user) => {
		console.log('send reset email fired');
		const tokenEntry = {
			userId: user,
			code: uuid(),
			used: false,
			valid: true,
			expiresAt: moment().add('24', 'h').format('YYYY-MM-DD HH:mm:ss')
		}
		return models.ResetTokens
		.create(tokenEntry)
		.then((data) => {
			console.log(data);
			//invalidate other tokens for the same user
			return models.ResetTokens
			.update({
				valid: false
			}, {
				where: {
					userId: user,
					$not: {
						expiresAt: data.dataValues.expiresAt
					}
				}
			})
		})
		.then((data) => {
			console.log(data);
			return models.Users
			.findOne({
				attributes: ['firstname', 'lastname', 'email'],
				where: {
					id: user
				},
				include: [{
					model: models.ResetTokens,
					attributes: ['code'],
					where: {
						valid: true
					}
				}]
			})
		})
		.then((result) => {
			console.log(util.inspect(result));
			const myUrlRoot = req.get('host');
			const mailOptions = {
				from: `"Hematogones Admin" <${from}>`,
				to: `"${result.dataValues.firstname} ${result.dataValues.lastname}" <${result.dataValues.email}>`,
				subject: 'Reset your password at hematogones.com',
				html: `<p>Thanks for using hematogones.com.  To reset your password, please follow the following link or paste it into your browser. <a href="${req.protocol}://${myUrlRoot}/reset/${result.dataValues.ResetTokens[0].dataValues.code}" target='_blank'>${myUrlRoot}/reset/${result.dataValues.ResetTokens[0].dataValues.code}</a>.</p><p>This link will expire in 24 hours, so if it's been longer than that, please <a href="${myUrlRoot}/reset/request">request another reset link</a>.</p>`
			}
			transporter.sendMail(mailOptions, function(err, response) {
				console.log(`transporter.sendMail fired`);
				console.log(`err ${err}`);
				console.log(`response ${response}`);
				if(err && !req.session.reset) {
					console.log(`err fired w/o reset reqd`);
					req.session.message = "Your reset request failed.  Please contact our <a href='/mail' target='_blank'>admin</a>.";
					req.session.messageType = 'fail-reset-send-optional';
					res.redirect('/');
				} else if(err) {
					console.log(`err fired w/ reset reqd`);
					req.session.message = "We've recently upgraded our login system and need you to reset your password, but we're having trouble contacting you.  Please contact our <a href='/mail' target='_blank'>admin</a>.";
					req.session.messageType = 'fail-reset-send-required';
					res.redirect('/');
				} else if(response && !req.session.reset) {
					console.log(`response fired w/o reset reqd`);
					req.session.message = "Your reset request was successful.  Please check your email to reset your password.";
					req.session.messageType = 'successful-reset-send-optional';
					res.redirect('/');
				} else if (response) {
					console.log(`response fired w/ reset reqd`);
					req.session.message = "We've recently upgraded our login system.  Please check the email you registered to reset your password.";
					req.session.messageType = 'successful-reset-send-required';
					res.redirect('/');
				}
			});
		})
	},

}

module.exports = controller;
