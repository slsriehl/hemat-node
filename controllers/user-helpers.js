
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
	saveSession: function(req, res, data) {
    req.session.email = data.dataValues.email;
		req.session.password = data.dataValues.password;
		req.session.userId = data.dataValues.id;
    req.session.cookie.expires = 1000 * 60 * 60 * 24 * 3;
    req.session.save();
		//console.log(`req.session.id from saveSession ${req.session.id}`);
  },
	//save a session message and render to a template,
	//possibly with the session email
	sessionMessage: (req, res, message, render) => {
		req.session.message = message;
		req.session.save();
		res.render(render, {data: req.session.message, layout: false});
	},
	//render with only a single message
	renderSingleMessage: (req, res, renderPath) => {
		console.log(req.session);
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
		return models.DismissedMessages
		.findAll({
			attributes: ['messageId'],
			where: {
				userId: req.session.user
			}
		})
		.then((dismissedResults) => {
			if(dismissedResults.length == 0) {
				return models.SystemMessages
				.findAll({
					attributes: ['id', 'message'],
						where: {
							expires: {
								$gt: moment(new Date()).toISOString()
							}
						}
				})
				.then((systemMessageResults) => {
					let messagesToShow = [];
					for(var i = 0; i < systemMessageResults.length; i++) {
						let messages = {
							id: systemMessageResults[i].dataValues.id,
							text: systemMessageResults[i].dataValues.message
						}
						messagesToShow.push(messages);
					}
					req.session.systemMessages = messagesToShow;
					req.session.save();
					console.log(req.session);
					res.render(renderPath, {
						messages: req.session.systemMessages
					});
				});
			} else {
				let dontShow = [];
				for(var i = 0; i < dismissedResults.length; i++) {
					dontShow.push(dismissedResults[i].messageId);
				}
				console.log(dontShow);
				return models.SystemMessages
				.findAll({
					attributes: ['id', 'message'],
						where: {
							expires: {
								$gt: moment(new Date()).toISOString()
							}
						}
				})
				.then((systemMessageResults) => {
					console.log(systemMessageResults);
					console.log(`don't show ${dontShow}`);
					let messagesToShow = [];
					for(var i = 0; i < systemMessageResults.length; i++) {
						for(var k = 0; k < dontShow.length; k++) {
							if(systemMessageResults[i].dataValues.id == dontShow[k]) {
								console.log('foo');
							} else {
								let messages = {
									id: systemMessageResults[i].dataValues.id,
									text: systemMessageResults[i].dataValues.message
								}
								messagesToShow.push(messages);
								req.session.systemMessages = messagesToShow;
								req.session.save();
								console.log(req.session);
							}
						}
					}
					res.render(renderPath, {
						messages: req.session.systemMessages
					});
				})
			}

			console.log(dismissedResults);
			res.json(dismissedResults);
		})
		// return models.SystemMessages
		// .findAll({
		// 	attributes: ['id', 'message', 'expires'],
		// 	where: {
		// 		expires: {
		// 			$gt: moment(new Date()).toISOString()
		// 		}
		// 	}
		// })
		// .then((data) => {
		// 	console.log(data);
		//
		// })
		// .then((dismissedResult) => {
		//
		// })
		.catch(error => console.log(error));
	},

	settingsSessMessage: (req, res, message) => {
		req.session.message = message;
		req.session.save();
		readController.readTodos(req, res, null, req.session.message);
		//res.render('todos.hbs', {data: req.session.message, email: req.session.email, layout: false})
	}
}

module.exports = helpers;
