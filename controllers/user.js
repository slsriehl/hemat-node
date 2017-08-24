const models = require('../models');

const resetController = require('./reset');
const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const reCaptchaSecret = require('../config/recaptcha');

const util = require('util');
const ReCAPTCHA = require('recaptcha2');


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
					$or: {
						username: testUser.username,
						email: testUser.email
					}
				}
			})
		})
		.then((data) => {
			//test with positive and negative cases
			console.log(data);
			if(data.length == 0) {
				console.log(newUser);
				return models.Users
				.create(newUser)
				.then((data) => {
					console.log(data);
					cookieHelpers.verifyCookie(req, res, true);
					req.session.message = 'Welcome to Hematogones.com!  I hope you find these tools useful.';
					req.session.messageType = 'successful-signup';
					req.session.user = data.dataValues.id;
					req.session.firstname = data.dataValues.firstname;
					req.session.save();
					helpers.getSystemMessages(req, res, 'index.hbs');
				})
			} else {
				req.session.message = 'Sorry, that username or email is taken already.  Please try another or <a href="/reset">reset your account</a>.';
				req.session.messageType = 'failed-signup';
				req.session.save();
				helpers.renderSingleMessage(req, res, 'login/signup.hbs',
				[

					"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
				], true);
			}
		})
		.catch((error) => {
			req.session.error = error;
			req.session.message = "Sorry, we had an error.  Please try to sign up again, and be mindful of the Captcha field.  If you get another error, please <a href='/mail' target='_blank'>email our admin</a>.";
			req.session.messageType = 'system-fail';
			req.session.save();
			generalHelpers.writeToErrorLog(req);
			helpers.renderSingleMessage(req, res, 'login/signup.hbs', [

				"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
			],
			true
		);
		});
	},
	//login a user by authenticating login info against the DB
	loginUser: (req, res) => {
		//body elements are email and password
		console.log(req.body);
		//sequelize call to authenticate user against the Users table
		return models.Users
		.findOne({
			attributes: ['id', 'password', 'firstname', 'requireReset'],
			where: {
				$or: {
					email: req.body.credential.trim().toLowerCase(),
					username: req.body.credential.trim().toLowerCase()
				}
			}
		})
		.then((data) => {
			console.log(`data ${util.inspect(data)}`);
			if(data == null) {
				req.session.message = "Sorry, that username or email doesn't match any on record.  Please try again or <a href='/user/reset/request'>reset your password</a>.";
				req.session.messageType = 'failed-login';
				req.session.save();
				helpers.renderSingleMessage(req, res, 'login/login.hbs', [

					"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
				]);
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
					helpers.renderSingleMessage(req, res, 'login/login.hbs', [

						"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
					]);
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
			generalHelpers.writeToErrorLog(req);
			helpers.renderSingleMessage(req, res, 'login/login.hbs', [

				"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
			]);
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
		if(cookieHelpers.verifyCookie(req, res)) {
			req.session.message = null;
			req.session.messageType = null;
			res.render('index.hbs', {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				}
			});
		} else {
			res.render('index.hbs');
		}
	},
	//display settings page
	userSettings: (req, res) => {
		//console.log(req.headers.cookie);
		//use the session to display the email and username of the user
		if(cookieHelpers.verifyCookie(req, res)) {
			console.log(req.session);
			return models.Users
			.findOne({
				attributes: ['id', 'email', 'username', 'firstname', 'lastname'],
				where: {
					id: req.session.user
				}
			})
			.then((data) => {
				if(data.dataValues.id == req.session.user) {
					const ifSessionMessages = () => {
						let theseMessages;
						if(req.session.message) {
							theseMessages = [{
								text: req.session.message,
								id: req.session.messageType
							}]
							return theseMessages;
						} else {
							return null;
						}
					}
					res.render('login/settings.hbs', {
							messages: ifSessionMessages,
							isAuth: {
								check: req.session.isAuth,
								firstname: req.session.firstname,
								email: data.dataValues.email,
								username: data.dataValues.username,
								firstname: data.dataValues.firstname,
								lastname: data.dataValues.lastname
							},
							specificScripts: [

								"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
							]
					});
				} else {
					res.redirect('/user/login');
				}
			})
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
					lastname: req.body.newLastname.trim()
				};
				const cleanObj = generalHelpers.cleanObj(objToUpdate);
				models.Users
				.findAll({
					attributes: ['id', 'username', 'email'],
					where: {
						id: {
							$ne: req.session.user
						},
						$or: {
							username: objToUpdate.username,
							email: objToUpdate.email
						}
					}
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
						models.Users
						.update(cleanObj, {
							where: {
								id: req.session.user
							}
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
						});
					}
				});
			}
		})
		.catch(error => console.log(error));
	},
	//dismiss a message
	dismissMessage: (req, res) => {
		const messageId = parseInt(req.body.id);
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
				console.log(error);
				//write to error log
				res.send(false);
			})
		}
	},
	//to delete the user and all her tests in the db??
	deleteUser: (req, res) => {
	// 	console.log(`req.headers.cookie ${util.inspect(req.headers.cookie)}`);
	// 	console.log(`req.headers.password ${req.headers.password}`);
	// 	const sentCookie = cookieHelpers.readCookie(req, 'do-it');
	// 	//sync the users table
	// 		//query the session store for the user's email address based on the
	// 		//cookie stored on the client side
	// 	return models.ConnectSession
	// 	.findOne({
	// 		where: { sid: sentCookie }
	// 	})
	// 	.then((data) => {
	// 		//if the cookie is found
	// 		console.log(`found session? ${util.inspect(data.data)}`);
	// 		//parse the string in the session data column to an object
	// 		const emailObj = JSON.parse(data.data);
	// 		//query the Users table for the user stored in the session
	// 		//if the user is found
	// 		console.log(`found user? ${util.inspect(emailObj)}`);
	// 		const hash = helpers.getHash(req.headers.password, emailObj.password);
	// 		//if the password sent to authorize delete matches the stored hash
	// 		if(hash) {
	// 			console.log('password is correct');
	// 			//delete the User and cascade delete all her todos
	// 			return models.User
	// 			.destroy({
	// 				//object destructuring doesn't work here either. pooh!
	// 				where: { email: emailObj.email }
	// 			})
	// 			.then((data) => {
	// 				//if a response is received from deleting the user
	// 				//console.log(`data ${util.inspect(data)}`);
	// 				//console.log(typeof data);
	// 				if(data === 0) {
	// 				//the user wasn't deleted
	// 					helpers.sessionMessage(req, res, `Sorry, your account wasn't deleted.  Please check your credentials and try again.`, 'login.hbs');
	// 				} else if(data === 1) {
	// 					//the user was deleted so delete her session as well
	// 					req.session.destroy();
	// 					res.render('login.hbs', {data: 'Your account and all your to-dos were successfully deleted.', layout: false});
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				//no data was received from deleting the user
	// 				console.log('error, destroy user call failed');
	// 				throw error;
	// 			});
	// 		} else {
	// 			//if the password sent to authorize the user delete
	// 			//doesn't match the stored hash
	// 			helpers.sessionMessage(req, res, 'Your password is incorrect.  Please try again.', 'login.hbs');
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		//if the client side cookie is not found in the session store
	// 		console.log(`error, find session call failed.`);
	// 		helpers.sessionMessage(req, res, 'Error deleting your account.  Please login again.', 'login.hbs');
	// 		throw error;
	// 	});
	}
}




module.exports = controller;
