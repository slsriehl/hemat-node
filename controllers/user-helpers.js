
const models = require('../models');
const bcrypt = require('bcryptjs');
const util = require('util');
const moment = require('moment');
//const secretKey = require('./config/secret');

const cookieHelpers = require('./cookie-helpers');
const readController = require('./read');

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
		if(req.session.reset == true) {
			helpers.initiateResetPassword(req, res, renderPath);
		} else {
			res.render(renderPath, {
				messages: [{
					text: req.session.message,
					id: req.session.messageType
				}]
			});
		}
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
	initiateResetPassword: (req, res) => {
		console.log('initiate reset password fn fired');
		//use nodemailer and UUID generator plus a DB table giving an expiration date of the UUID to send an email with a path to reset that only works if the UUID isn't expired. requires routes, /user/reset get (validate UUID once), plus an error page if the uuid is expired, and a db migration to create the table of valid reset tokens

		//can you use handlebars to template an email sent through nodemailer?
	},
	resetPassword: (req, res) => {
		console.log('reset password fn fired');
		//post route validate uuid token again plus validate email address typed in.  hash password, store, login, and display a req.session.message showing reset password successful in addition to system messages
		//set Users table requireReset to false before sending to login
	},

}

module.exports = helpers;
