
const models = require('../models');
const bcrypt = require('bcryptjs');
const util = require('util');
const moment = require('moment');

const cookieHelpers = require('./cookie-helpers');
const readController = require('./read');

const helpers = {
	updateUser: (req, res, objToUpdate) => {
		const sentCookie = cookieHelpers.readCookie(req, 'do-it');
		return models.ConnectSession
		.findOne({
			where: { sid: sentCookie }
		})
		.then((data) => {
			console.log(data.dataValues);
			sessionObj = JSON.parse(data.dataValues.data);
			console.log(sessionObj.password);
			//dehash password
			const hash = helpers.getHash(req.body.password, sessionObj.password);
			console.log(hash);
			//if current password matches stored hash
			if(hash) {
				//pass object to replace Users table row values, either username,
				//password, or both, where the email matches the session email
				return models.User
				.update(objToUpdate, {
					where: { email: sessionObj.email }
				})
				.then((result) => {
					//returned object from the update call
					console.log(`result in update user ${util.inspect(result)}`);
					//stringify the data object so that we can check the value
					//to determine the message to send
					//can't compare objects/arrays for equality
					let dataStr = JSON.stringify(result);
					console.log(dataStr);
					if(dataStr === '[0]') {
						//if no User record was updated
						helpers.settingsSessMessage(req, res, `Info not updated.  Try again.`);
					} else if (dataStr === '[1]') {
						//if one User record was updated
						const hash = helpers.setHash(req.body.newPassword);
						if(hash) {
							req.session.password = hash;
						}
						if(req.body.newEmail) {
							req.session.email = req.body.newEmail;
						}
						helpers.settingsSessMessage(req, res, `You're golden!  Please use your new credentials to login in the future.`);
					} else {
						//more than one User record is updated, yikes!
						helpers.settingsSessMessage(req, res, `Error.`);
					}
				})
				.catch((error) => {
					console.log(error);
					//the update call doesn't return an object
					const hash = helpers.setHash(req.body.newPassword);
					if(hash) {
						req.session.password = hash;
					}
					if(req.body.newEmail) {
						req.session.email = req.body.newEmail;
					}
					helpers.settingsSessMessage(req, res, `Info not updated.  Try again.`);
				})
			} else {
				//the current password doesn't match the stored hash
				helpers.settingsSessMessage(req, res, `Your current password doesn't match our records.`);
			}
		})
		.catch((error) => {
			console.log('session lookup failed');
			helpers.settingsSessMessage(req, res, `Info not updated.  Try again.`);
		});
	},
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
	//create a session object with stored email
	// saveSession: function(req, res, data) {
  //   req.session.email = data.dataValues.email;
	// 	req.session.password = data.dataValues.password;
	// 	req.session.userId = data.dataValues.id;
  //   req.session.cookie.expires = 1000 * 60 * 60 * 24 * 3;
  //   req.session.save();
	// 	//console.log(`req.session.id from saveSession ${req.session.id}`);
  // },
	//save a session message and render to a template,
	//possibly with the session email
	// sessionMessage: (req, res, message, render) => {
	// 	req.session.message = message;
	// 	req.session.save();
	// 	res.render(render, {data: req.session.message, layout: false});
	// },

	renderSingleMessage: (req, res, renderPath) => {
		//render with only a single message
		console.log(req.session.message);
		console.log(req.session.messageType);
		if(req.session.reset == true) {
			this.initiateResetPassword(req, res, renderPath);
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
				this.renderSingleMessage(req, res, renderPath);
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
					messages: systemMessages
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
	settingsSessMessage: (req, res, message) => {
		req.session.message = message;
		req.session.save();
		readController.readTodos(req, res, null, req.session.message);
		//res.render('todos.hbs', {data: req.session.message, email: req.session.email, layout: false})
	}
}

module.exports = helpers;
