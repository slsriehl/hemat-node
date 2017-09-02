
const models = require('../models');

const util = require('util');
const moment = require('moment');
const Promise = require('bluebird');

const nodemailer = require('nodemailer');

const transporter = require('./transporter');

let emailTo;
if(process.env.EMAIL_TO) {
	emailTo = process.env.EMAIL_TO;
} else {
	emailTo = require('../config/emailTo');
}

let from;
if(process.env.EMAIL_FROM) {
	from = process.env.EMAIL_FROM;
} else {
	from = require('../config/from');
}

const generalHelpers = require('./general-helpers');
const cookieHelpers = require('./cookie-helpers');

const controller = {
	renderMailPage: (req, res) => {
		let msg = null;
		if(req.session.message) {
			let tempMsg = req.session.message;
			let tempType = req.session.messageType;
			req.session.message = null;
			req.session.messageType = null;
			msg = [{
				text: tempMsg,
				id: tempType
			}]
		}
		if(cookieHelpers.verifyCookie(req, res)) {
			return models.Users
			.findOne({
				attributes: ['email', 'firstname', 'lastname'],
				where: {
					id: req.session.user
				}
			})
			.then((data) => {
				res.render('mail.hbs', {
					messages: msg,
					isAuth: {
						check: req.session.isAuth,
						email: data.dataValues.email,
						firstname: data.dataValues.firstname,
						lastname: data.dataValues.lastname
					},
					specificScripts: [
						"../vendor/jquery/js/jquery.validate.min.js",
						"../js/login-settings.js"
					]
				});
			})
			.catch((error) => {
				console.log(error);
				generalHelpers.writeToErrorLog(req, error);
				res.render('mail.hbs', {
					messages: msg,
					specificScripts: [
						"../vendor/jquery/js/jquery.validate.min.js",
						"../js/login-settings.js"
					]
				});
			})
		} else {
			res.render('mail.hbs', {
				messages: msg,
				specificScripts: [
					"../vendor/jquery/js/jquery.validate.min.js",
					"../js/login-settings.js"
				]
			});
		}
	},
	sendUserMail: (req, res) => {
		console.log(req.body)
		let message = generalHelpers.strReplaceLineBreaks(req.body.yourMessage);
		message = `<p>${message}</p><p><strong>From: </strong> ${req.body.yourName} at ${req.body.yourEmail}</p>`;
		const mailOptions = {
			from: from,
			to: emailTo,
			subject: req.body.yourSubject,
			html: message
		}
		transporter.sendMail(mailOptions, function(err, response) {
			console.log(`transporter.sendMail fired`);
			console.log(`err ${err}`);
			console.log(`response ${response}`);
			if(err) {
				console.log(`err fired`);
				req.session.message = "Your mail wasn't sent.  Please try again later.";
				req.session.messageType = 'fail-mail-send';
				res.redirect('/mail')
			} else if (response) {
				console.log(`response fired`);
				req.session.message = "Your mail was successfully sent.  We'll get back you as soon as we can!";
				req.session.messageType = 'successful-mail-send';
				res.redirect('/');
			}
		});
	}
}

module.exports = controller;
