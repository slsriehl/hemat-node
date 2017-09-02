const models = require('../models');

const resetController = require('./reset');
const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const
const Promise = require('bluebird');

const util = require('util');
const ReCAPTCHA = require('recaptcha2');
const moment = require('moment');

let reCaptchaSecret;
if(process.env.CAPTCHA) {
	reCaptchaSecret = process.env.CAPTCHA;
} else {
	reCaptchaSecret = require('../config/recaptcha');
}



const controller = {
	//save a new user to the db
	signupUser: (req, res) => {
		const recaptcha = new ReCAPTCHA({
			siteKey: "6Le99i0UAAAAAIIKkc2tRvlXTjVdwxxrwHg7YY2d",
			secretKey: reCaptchaSecret
		});

		console.log(req.body);
		//sync models and save user to the Users table
		//hash password
		const hash = helpers.setHash(req.body.password.trim());
		console.log(hash);

		//create new user to save
		const newUser = {
			firstname: req.body.firstname.trim(),
			lastname: req.body.lastname.trim(),
			username: req.body.username.trim().toLowerCase(),
			email: req.body.email.trim().toLowerCase(),
			password: hash,
			requireReset: false
		}
		if(req.body.mobile) {
			//sanitize mobile to a string of just numbers
			newUser.mobile = req.body.mobile.trim();
		}

		const testUser = {
			username: req.body.username.trim().toLowerCase(),
			email: req.body.email.trim().toLowerCase()
		}

		console.log(newUser);
		console.log(testUser);

		recaptcha.validateRequest(req)
		.then(() => {
		//body elements are many

			//sequelize call to save user
			return models.Users
			.findAll({
				attributes: ['username', 'email'],
				where: {
					$or: [{
						username: testUser.username
					}, {
						email: testUser.email
					}]
				}
			})
		})
		.then((data) => {
			//test with positive and negative cases
			console.log(data);
			if(data.length == 0) {
				return Promise.resolve(newUser);
			} else {
				req.session.message = 'Sorry, that username or email is taken already.  Please try another or <a href="/reset">reset your account</a>.  If you previously had an account with these credentials and would like to reactivate it, please <a href="/mail">contact our admin</a>.';
				req.session.messageType = 'failed-signup';
				req.session.save();
				res.redirect('/user/signup');
			}
		})
		.then((result) => {
			console.log(result);
			return models.Users
			.create(result)
		})
		.then((data) => {
			console.log(data);
			//req.session.regenerate();
			//req.session = null;
			cookieHelpers.verifyCookie(req, res, true);
			req.session.message = 'Welcome to Hematogones.com!  I hope you find these tools useful.';
			req.session.messageType = 'successful-signup';
			req.session.user = data.dataValues.id;
			req.session.firstname = data.dataValues.firstname;
			req.session.save();
			helpers.getSystemMessages(req, res, 'index.hbs');
		})
		.catch((error) => {
			req.session.error = error;
			req.session.message = "Sorry, we had an error.  Please try to sign up again, and be mindful of the Captcha field.  If you get another error, please <a href='/mail' target='_blank'>email our admin</a>.";
			req.session.messageType = 'system-fail';
			req.session.save();
			generalHelpers.writeToErrorLog(req, error);
			res.redirect('/user/signup');
		});
	},
	//login a user by authenticating login info against the DB
	loginUser: (req, res) => {
		//body elements are email and password
		console.log(req.body);
		//sequelize call to authenticate user against the Users table
		return models.Users
		.findOne({
			attributes: ['id', 'password', 'firstname', 'requireReset', 'deletedAt'],
			where: {
				$or: [{
					email: req.body.credential.trim().toLowerCase()
				}, {
					username: req.body.credential.trim().toLowerCase()
				}]
			}
		})
		.then((data) => {
			console.log(`data ${util.inspect(data)}`);
			if(data == null) {
				req.session.message = "Sorry, that username or email doesn't match any on record.  Please try again or <a href='/user/reset/request'>reset your password</a>.";
				req.session.messageType = 'failed-login';
				req.session.save();
				res.redirect('/user/login');
			} else if(data.dataValues.deletedAt) {
				req.session.message = "You appear to have deleted your account.  To reactivate it, please <a href='/mail'>contact our admin</a>.";
				req.session.messageType = 'failed-login-deleted-account';
				req.session.save();
				controller.renderIndex(req, res);
			} else if(data.dataValues.requireReset) {
				req.session.reset = true;
				req.session.user = data.dataValues.id;
				req.session.save();
				resetController.sendResetEmail(req, res);
			} else {
				console.log('foo');
				const hash = helpers.getHash(req.body.password.trim(), data.dataValues.password);
				if(hash) {
					//password matches
					console.log('hash successful');
					//req.session.regenerate();
					//req.session = null;
					req.session.user = data.dataValues.id;
					req.session.message = null;
					req.session.messageType = null;
					req.session.firstname = data.dataValues.firstname;
					cookieHelpers.verifyCookie(req, res, true);
					req.session.save();
					helpers.getSystemMessages(req, res, 'index.hbs');
				} else {
					//if there's data but the hash doesn't match the entered password
					req.session.message = "Sorry, that password isn't right.  Please try again or <a href='/user/reset'>reset your password</a>.";
					req.session.messageType = 'failed-login';
					req.session.save();
					res.redirect('/user/login');
				}
			}
		})
		//if the sequelize call fails
		.catch((error) => {
			req.session.error = error;
			console.log(req.session.error);
			req.session.message = "Sorry, we had an error.  Please try to login again.  If you get another error, please <a href='/mail' target='_blank'>email our admin</a>.";
			req.session.messageType = 'system-fail';
			req.session.save();
			generalHelpers.writeToErrorLog(req, error);
			res.redirect('/user/login');
		});
	},
	//delete the session object on logout and render the login page
	logoutUser: (req, res) => {
		console.log(req.params);
		req.session.destroy();
		res.render('index.hbs');
	},
	//show the index page whether logged in or not
	renderIndex: (req, res) => {
		console.log(util.inspect(req.session) + 'reqsess renderindex prefunction');
		if (cookieHelpers.verifyCookie(req, res) && !req.session.message) {
			//if the logged in user has system messages but not a single session message
			console.log('verified cookie on index load');
			res.render('index.hbs', {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				}
			});
		} else if(cookieHelpers.verifyCookie(req, res)) {
			const msg = req.session.message;
			const msgType = req.session.messageType;
			req.session.message = null;
			req.session.messageType = null;
			let messages = req.session.systemMessages || [];
			messages.push({
				text: msg,
				id: msgType
			});
			res.render('index.hbs', {
				messages: messages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				}
			});

		} else if(req.session.message) {
			//if the unlogged in user tried to do something and needs to get a message
			console.log('index no cookie but system message');
			const loggedOutMessage = req.session.message;
			const loggedOutMessageType = req.session.messageType;
			req.session.message = null;
			req.session.messageType = null;
			if(req.session.toEnd) {
				console.log('fire destroy');
				req.session.destroy();
			}
			res.render('index.hbs', {
				messages: [{
					text: loggedOutMessage,
					id: loggedOutMessageType
				}]
			});
		} else {
			//if the user isn't logged in and doesn't need to get any messages
			console.log('index no cookie no message');
			res.render('index.hbs');
		}
	},
	//display settings page
	userSettings: (req, res) => {
		//console.log(req.headers.cookie);
		//use the session to display the email and username of the user
		if(cookieHelpers.verifyCookie(req, res)) {
			return models.Users
			.findOne({
				attributes: ['email', 'username', 'firstname', 'lastname', 'mobile'],
				where: {
					id: req.session.user
				}
			})
			.then((data) => {
				console.log(`req.session at user settings ${util.inspect(req.session)}`);
				const ifSessionMessages = () => {
					console.log(req.session.message);
					if(req.session.message) {
						let theseMessages = [];
						const singleMessage = req.session.message;
						const singleMessageType = req.session.messageType;
						req.session.message = null;
						req.session.messageType = null;
						theseMessages = [{
							text: singleMessage,
							id: singleMessageType
						}];
						return theseMessages;
					} else {
						return null;
					}
				}
				res.render('login/settings.hbs', {
						messages: ifSessionMessages(),
						isAuth: {
							check: req.session.isAuth,
							email: data.dataValues.email,
							username: data.dataValues.username,
							firstname: data.dataValues.firstname,
							lastname: data.dataValues.lastname,
							phone: data.dataValues.mobile
						},
						specificScripts: [
							"/vendor/jquery/js/jquery.validate.min.js",
							"/js/login-settings.js"
						]
				});
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
				res.render('index.hbs');
			});
		} else {
			res.redirect('/user/login');
		}
	},
	//change user login info in the Users table
	updateUser: (req, res) => {
		//the user will provide either a new password or a new email, or both,
		//to update their account
		//they must send their current password to authorize them to change the data
		console.log(req.body);
		let cleanObj;
		return models.Users
		.findOne({
			attributes: ['password'],
			where: {
				id: req.session.user
			}
		})
		.then((data) => {
			const hash = helpers.getHash(req.body.password.trim(), data.dataValues.password);
			if(!hash) {
				req.session.message = "Sorry, the current password you entered isn't right.  Please try again or <a href='/user/reset'>reset your password</a>.";
				req.session.messageType = 'failed-settings-auth';
				req.session.save();
				controller.userSettings(req, res);
			} else {
				const objToUpdate = {
					password: helpers.setHash(req.body.newPassword.trim()),
					email: req.body.newEmail.trim().toLowerCase(),
					username: req.body.newUsername.trim().toLowerCase(),
					firstname:  req.body.newFirstname.trim(),
					lastname: req.body.newLastname.trim(),
					mobile: req.body.newPhone.trim()
				};
				cleanObj = generalHelpers.cleanObj(objToUpdate);
				return Promise.resolve(objToUpdate);
			}
		})
		.then((objToUpdate) => {
			return models.Users
			.findAll({
				attributes: ['id', 'username', 'email'],
				where: {
					id: {
						$ne: req.session.user
					},
					$or: [{
						username: objToUpdate.username
					}, {
						email: objToUpdate.email
					}]
				}
			})
		})
		.then((data) => {
			if(data.length > 0) {
				req.session.message = "Sorry, it looks like someone already has that email or username.  Please try again.";
				req.session.messageType = 'settings-duplicate-username-or-email';
				req.session.save();
				controller.userSettings(req, res);
			} else if (!cleanObj) {
				req.session.message = "It doesn't seem like you entered any data to change.  Please try again.";
				req.session.messageType = 'settings-no-info';
				req.session.save();
				controller.userSettings(req, res);
			} else {
				return Promise.resolve(cleanObj);
			}
		})
		.then((cleanObj) => {
			return models.Users
			.update(cleanObj, {
				where: {
					id: req.session.user
				}
			})
		})
		.then((result) => {
			console.log(result);
			let dataStr = JSON.stringify(result);
			console.log(dataStr);
			if(dataStr === '[0]') {
				//if no User record was updated
				req.session.message = "We weren't able to change your data.  Please try again or <a href='/mail' target='_blank'>contact our admin</a>.";
				req.session.messageType = 'settings-didnt-change';
				req.session.save();
				controller.userSettings(req, res);
			} else if (dataStr === '[1]') {
				//if one User record was updated
				req.session.message = "We got your changes!  Check below to see if everything came through all right.";
				req.session.messageType = 'successful-settings-change';
				req.session.save();
				controller.userSettings(req, res);
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			req.session.message = "We weren't able to change your data.  Please try again or <a href='/mail' target='_blank'>contact our admin</a>.";
			req.session.messageType = 'settings-didnt-change';
			req.session.save();
			controller.userSettings(req, res);
		});
	},
	//dismiss a message
	dismissMessage: (req, res) => {
		const messageId = parseInt(req.body.id.trim());
		if(isNaN(messageId)) {
			console.log('clearing req.session.message et al');
			req.session.message = null;
			req.session.messageType = null;
			res.send(true);
		} else {
			const newDismissedMessage = {
				userId: req.session.user,
				messageId: messageId
			}
			return models.DismissedMessages
			.create(newDismissedMessage)
			.then((data) => {
				if(data.dataValues.userId == req.session.user) {
					console.log('new dismissed message created, updating session...');
					helpers.getSystemMessages(req, res, null);
				}
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
				res.send(false);
			})
		}
	},
	deleteUser: (req, res) => {
		//to set the user to deleted in the db
		console.log(req.body);
		return models.Users
		.findOne({
			attributes: ['password'],
			where: {
				id: req.session.user
			}
		})
		.then((data) => {
			console.log(data.dataValues);
			const hash = helpers.getHash(req.body.password.trim(), data.dataValues.password);
			if(hash) {
				return models.Users
				.update({
					deletedAt: moment().format('YYYY-MM-DD HH:mm:ss')
				}, {
					where: {
						id: req.session.user
					}
				})
			} else {
				req.session.message = "The password you entered is not correct.";
				req.session.messageType = "failed-account-delete";
				req.session.save();
				controller.userSettings(req, res);
			}
		})
		.then((result) => {
			console.log(result);
			const resStr = result.toString();
			console.log(resStr);
			if(resStr === '1') {
				//if account deleted create a new session, set delete message, and redirect to the index page
				req.session.user = null;
				req.session.toEnd = true;
				req.session.message = "Your account has been successfully deleted.";
				req.session.messageType = "success-account-delete";
				req.session.save();
				console.log(util.inspect(req.session) + 'delete success reqsess');
				controller.renderIndex(req, res);
			} else {
				req.session.message = "Sorry, your account was not deleted.  Please try again and <a href='/mail'>contact our admin</a> if the problem persists.";
				req.session.messageType = "failed-account-delete";
				req.session.save();
				controller.userSettings(req, res);
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			req.session.message = "Sorry, your account was not deleted.  Please try again and <a href='/mail'>contact our admin</a> if the problem persists.";
			req.session.messageType = "failed-account-delete";
			req.session.save();
			controller.userSettings(req, res);
		});
	}
}




module.exports = controller;
