
const models = require('../models');

const util = require('util');
const moment = require('moment');
 

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
const reportsHelpers = require('./reports-helpers');

const controller = {
	renderMailPage: (req, res) => {
		let msg = [];
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
					messages: req.session.privacyMessage.concat(msg ? msg : []),
					isAuth: {
						check: req.session.isAuth,
						email: data.dataValues.email,
						firstname: data.dataValues.firstname,
						lastname: data.dataValues.lastname
					},
					specificScripts: [
						"/vendor/jquery/js/jquery.validate.min.js",
						"/js/login-settings.js"
					]
				});
			})
			.catch((error) => {
				console.log(error);
				generalHelpers.writeToErrorLog(req, error);
				res.render('mail.hbs', {
					messages: req.session.privacyMessage.concat(msg ? msg : []),
					specificScripts: [
						"/vendor/jquery/js/jquery.validate.min.js",
						"/js/login-settings.js"
					]
				});
			})
		} else {
			res.render('mail.hbs', {
				messages: req.session.privacyMessage.concat(msg ? msg : []),
				specificScripts: [
					"/vendor/jquery/js/jquery.validate.min.js",
					"/js/login-settings.js"
				]
			});
		}
	},
	sendUserMail: (req, res) => {
		console.log(req.body)
		let message = generalHelpers.strReplaceLineBreaks(req.body.yourMessage);
		message = `<p>${message}</p><p><strong>From: </strong> ${req.body.yourName} at ${req.body.yourEmail}</p>`;
		const mailOptions = {
			from: `"Hematogones Admin" <${from}>`,
			to: emailTo,
			subject: req.body.yourSubject,
			html: message
		}
		return transporter(mailOptions)
		.then((response) => {
			console.log(response);
			console.log(`response fired`);
			req.session.message = "Your mail was successfully sent.  We'll get back you as soon as we can!";
			req.session.messageType = 'successful-mail-send';
			res.redirect('/');
		})
		.catch((error) => {
			console.log(`err fired`);
			req.session.message = "Your mail wasn't sent.  Please try again later.";
			req.session.messageType = 'fail-mail-send';
			res.redirect('/mail');
		});

	},
	emailReport: (req, res) => {
		console.log(req.params);
		let mailOptions;
		let pdfName;
		return models.Reports
		.findOne({
			attributes: ['pdfName', 'createdAt'],
			where: {
				id: req.params.report
			},
			include: [{
				attributes: ['name'],
				model: models.Apps
			}, {
				attributes: ['reference'],
				model: models.CaseReferences
			}, {
				attributes: ['firstname', 'lastname', 'email'],
				model: models.Users
			}]
		})
		.then((data) => {
			console.log(util.inspect(data.dataValues, {depth: 3}));
			let reportObj = {
				email: data.dataValues.User.dataValues.email,
				firstname: data.dataValues.User.dataValues.firstname,
				lastname: data.dataValues.User.dataValues.lastname,
				app: data.dataValues.App.dataValues.name,
				pdfName: data.dataValues.pdfName,
				createdAt: moment(data.dataValues.createdAt).utc().format('YYYY-MM-DD HH:mm:ss UTC')
			}
			if(data.dataValues.CaseReference) {
				reportObj.reference = data.dataValues.CaseReference.dataValues.reference;
			}
			console.log(reportObj);
			return Promise.resolve(reportObj);
		})
		.then((data) => {
			pdfName = data.pdfName;
			let text;
			if(data.reference) {
				text = `${data.app} for ${data.reference} created at ${data.createdAt}`;
			} else {
				text = `${data.app} created at ${data.createdAt}`;
			}
			mailOptions = {
				from: `"Hematogones Admin" <${from}>`,
				to: `"${data.firstname} ${data.lastname}" <${data.email}>`,
				subject: text + ' at hematogones.com',
				message: `Here is the ${text}.  Thanks for using hematogones.com!`,
			}
			let pdf = generalHelpers.resolvePath(`reports/${req.session.user}/${data.pdfName}`);
			console.log(pdf);
			console.log(mailOptions);
			return reportsHelpers.createReadStream(pdf);
		})
		.then((result) => {
			mailOptions.attachments = {
				filename: pdfName,
				content: result,
				contentType: 'application/pdf'
			}
			return transporter(mailOptions)
		})
		.then((response) => {
			let msg, msgType;
			console.log(`response fired`);
			msg = "Check your inbox! Your report is on its way.";
			msgType = 'successful-report-send';
			res.send({
				status: true,
				msg: msg,
				msgType: msgType
			});
		})
		.then((error) => {
			console.log(`err fired`);
			msg = "Your report wasn't emailed.  Please try again later or <a href='/mail'>contact our admin</a>";
			msgType = 'fail-mail-send';
			res.send({
				status: false,
				msg: msg,
				msgType: msgType
			});
		});
	},
}

module.exports = controller;
