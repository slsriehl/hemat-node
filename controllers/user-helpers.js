
const models = require('../models');

const util = require('util');
const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const moment = require('moment');
const escape = require('escape-html');

const nodemailer = require('nodemailer');
const transporter = require('../config/transporter');
const from = require('../config/from');

const cookieHelpers = require('./cookie-helpers');

const helpers = {
	//bcrypt save password
	setHash: (password) => {
		const salt = bcrypt.genSaltSync(10);
		if(password) {
			return bcrypt.hashSync(password, salt);
		} else {
			return null;
		}
	},
	//bcrypt retrieve password
	getHash: (password, hash) => {
		return bcrypt.compareSync(password, hash);
	},
	renderSingleMessage: (req, res, renderPath) => {
		//render with only a single message
		console.log(req.session.message);
		console.log(req.session.messageType);
		res.render(renderPath, {
			messages: [{
				text: req.session.message,
				id: req.session.messageType
			}]
		});
	},
	getSystemMessages: (req, res, renderPath) => {
		const thisDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss').toString();
		console.log(thisDate);
		return models.sequelize.query("SELECT sm.id, sm.message FROM SystemMessages sm WHERE NOT EXISTS (SELECT dm.messageId FROM DismissedMessages dm LEFT JOIN Users u ON dm.userId = u.id WHERE sm.id = dm.messageId AND u.id = " + req.session.user + ") AND sm.expires >= '" + thisDate + "';", {
			type: models.Sequelize.QueryTypes.SELECT
		})
		.then((results) => {
			console.log(`results: ${results}`);
			if(results.length == 0 && !req.session.message) {
				res.render(renderPath);
			} else if (results.length == 0 && req.session.message) {
				helpers.renderSingleMessage(req, res, renderPath);
			} else {
				let systemMessages = [];
				for(let i = 0; i < results.length; i++) {
					let systemMessage = {
						text: results[i].message,
						id: results[i].id
					}
					systemMessages.push(systemMessage);
				}
				req.session.systemMessages = systemMessages;
				if(req.session.message) {
					systemMessages.push({
						text: req.session.message,
						id: req.session.messageType
					});
				}
				res.render(renderPath, {
					messages: systemMessages,
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					}
				});
			}
		})
		.catch((error) => console.log(error));

		// return models.DismissedMessages.create({
		// 	userId: 95,
		// 	messageId: 2
		// })
	},
	sendResetEmail: (req, res) => {
		console.log('send reset email fired');
		const tokenEntry = {
			userId: req.session.user,
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
					userId: req.session.user,
					$not: {
						expiresAt: data.dataValues.expiresAt
					}
				}
			})
		})
		.then((something) => {
			console.log(something);
			return models.Users
			.findOne({
				attributes: ['firstname', 'lastname', 'email'],
				where: {
					id: req.session.user
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
			const mailOptions = {
				from: `"Hematogones Admin" <${from}>`,
				to: `"${result.dataValues.firstname} ${result.dataValues.lastname}" <${result.dataValues.email}>`,
				subject: 'Reset your password at hematogones.com',
				text: escape(`Thanks for using hematogones.com.  To reset your password, please follow the following link or paste it into your browser. <a href='localhost:5000/reset/${result.dataValues.ResetTokens[0].dataValues.code}' target='_blank'>localhost:5000/reset/${result.dataValues.ResetTokens[0].dataValues.code}</a>  This link will expire in 24 hours, so if it's been longer than that, please request another reset link at localhost:5000/reset/request`)
			}
			transporter.sendMail(mailOptions, function(err, response) {
		    console.log(`transporter.sendMail fired`);
		    console.log(`err ${err}`);
		    console.log(`response ${response}`);
		    if(err && !req.session.reset) {
		      console.log(`err fired`);
		      req.session.message = escape("Your reset request failed.  Please contact our <a href='/mail' target='_blank'>admin</a>.");
					req.session.messageType = 'fail-reset-send-optional';
		    } else if(err) {
					console.log(`err fired`);
		      req.session.message = escape("We've recently upgraded our login system and need you to reset your password, but we're having trouble contacting you.  Please contact our <a href='/mail' target='_blank'>admin</a>.");
					req.session.messageType = 'fail-reset-send-required';
				} else if(response && !req.session.reset) {
		      console.log(`response fired`);
					req.session.message = escape("Your reset request was successful.  Please check your email to reset your password.");
					req.session.messageType = 'successful-reset-send-optional';
		    } else if (response) {
					console.log(`response fired`);
					req.session.message = escape("We've recently upgraded our login system.  Please check the email you registered to reset your password.");
					req.session.messageType = 'successful-reset-send-required';
				}
				res.render('index.hbs', {
					messages: [{
						text: req.session.message,
						id: req.session.messageType
					}]
				});
		  });
		});

	},

}

module.exports = helpers;
