const models = require('../models');

const helpers = require('./user-helpers');
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');

const escape = require('escape-html');

const readController = require('./read');
const contextController = require('./context');


const util = require('util');


const controller = {
	//save a new user to the db
	signupUser: (req, res) => {
		//body elements are email and password
		console.log(req.body);
		//sync models and save user to the Users table
		//hash password
		const hash = helpers.setHash(req.body.password);
		console.log(hash);

		//create new user to save
		const newUser = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			email: req.body.email,
			password: hash,
			requireReset: false
		}
		if(req.body.mobile) {
			//sanitize mobile to a string of just numbers
			newUser.mobile = req.body.mobile;
		}

		const testUser = {
			username: req.body.username,
			email: req.body.email
		}

		console.log(newUser);
		console.log(testUser)
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
		.then((data) => {
			//test with positive and negative cases
			console.log(data);
			if(data.length == 0) {
				console.log(newUser);
				return models.Users
				.create(newUser)
				.then((data) => {
					console.log(data);
					req.session.message = escape('Welcome to Hematogones.com!  I hope you find these tools useful.  We will never sell your information.');
					req.session.messageType = 'successful-signup';
					req.session.user = data.dataValues.id;
					req.session.save();
					helpers.getSystemMessages(req, res, 'index.hbs');
				})
			} else {
				req.session.message = escape('Sorry, that username or email is taken already.  Please try another or <a href="/reset">reset your account</a>.');
				req.session.messageType = 'failed-signup';
				req.session.save();
				helpers.renderSingleMessage(req, res, 'login/signup.hbs');
			}
		})
		.catch((error) => {
			req.session.error = error;
			req.session.message = escape("Sorry, we had an error.  Please try to sign up again.  If you get another error, please <a href='/mail' target='_blank'>email our admin</a>.");
			req.session.messageType = 'system-fail';
			req.session.save();
			generalHelpers.writeToErrorLog(req);
			helpers.renderSingleMessage(req, res, 'login/signup.hbs');
		});
	},
	//login a user by authenticating login info against the DB
	loginUser: (req, res) => {
		//body elements are email and password
		console.log(req.body);
		//sequelize call to authenticate user against the Users table
		return models.Users
		.findOne({
			attributes: ['id', 'password', 'requireReset'],
			where: {
				$or: {
					email: req.body.credential,
					username: req.body.credential
				}
			}
		})
		.then((data) => {
			console.log(`data ${util.inspect(data)}`);
			//sequelize call succeeded
			//compare stored hash to password sent in post request
			if(data == null) {
				req.session.message = escape("Sorry, that username or email doesn't match any on record.  Please try again or <a href='/user/reset/request'>reset your password</a>.");
				req.session.messageType = 'failed-login';
				req.session.save();
				helpers.renderSingleMessage(req, res, 'login/login.hbs');
			} else if(data.dataValues.requireReset == true) {
				req.session.reset = true;
				req.session.user = data.dataValues.id;
				req.session.message = escape("We've recently upgraded our login system.  Please check the email you registered to reset your password.");
				req.session.messageType = 'password-reset-required';
				req.session.save();
				helpers.renderSingleMessage(req, res, 'index.hbs');
			} else {
				const hash = helpers.getHash(req.body.password, data.dataValues.password);
				if(hash) {
					//password matches
					req.session.user = data.dataValues.id;
					req.session.message = null;
					req.session.save();
					helpers.getSystemMessages(req, res, 'index.hbs');
				} else {
					//if there's data but the hash doesn't match the entered password
					req.session.message = escape("Sorry, that password isn't right.  Please try again or <a href='/user/reset'>reset your password</a>.");
					req.session.messageType = 'failed-login';
					req.session.save();
					helpers.renderSingleMessage(req, res, 'login/login.hbs');
				}
			}
		})
		//if the sequelize call fails
		.catch((error) => {
			req.session.error = error;
			req.session.message = escape("Sorry, we had an error.  Please try to login again.  If you get another error, please <a href='/mail' target='_blank'>email our admin</a>.");
			req.session.messageType = 'system-fail';
			req.session.save();
			generalHelpers.writeToErrorLog(req);
			helpers.renderSingleMessage(req, res, 'login/login.hbs');
		});
	},
	//delete the session object on logout and render the login page
	logoutUser: (req, res) => {
		console.log(req.body);
		req.session.destroy();
		res.render('login.hbs', {layout: false});
		//
	},
	//display settings page
	userSettings: (req, res) => {
		console.log(req.headers);
		const sentCookie = cookieHelpers.readCookie(req, 'do-it');
		//query the session store for the user's session
		//to display their email address on the settings page
		return models.ConnectSession
		.findOne({
			where: { sid: sentCookie }
		})
		.then((data) => {
			console.log(data.dataValues);
			//the data in the session store is saved as a string,
			//so parse it into an object
			sessionObj = JSON.parse(data.dataValues.data);
			console.log(sessionObj.email);
			//render email on settings page
			res.render('settings.hbs', {email: sessionObj.email, layout: false});
		})
		//if the call to the session store fails
		.catch((error) => {
			console.log(error);
			helpers.sessionMessage(req, res, `Sorry, your credentials don't match any users.  Please check them and try again.`, 'login.hbs');
		});

	},
	//change user login info in the Users table
	updateUser: (req, res) => {
		//the user will provide either a new password or a new email, or both,
		//to update their account
		//they must send their current password to authorize them to change the data
		console.log(req.body);
		//if they send both
		if(req.body.newPassword && req.body.newEmail) {
			const hash = helpers.setHash(req.body.newPassword)
			const objToUpdate = { password: hash, email: req.body.newEmail };
			helpers.updateUser(req, res, objToUpdate);
		} else if(req.body.newPassword) {
			//if they just change the password,
			//pass the new password to the helper function to change the stored hash
			const hash = helpers.setHash(req.body.newPassword)
			const objToUpdate = { password: hash };
			helpers.updateUser(req, res, objToUpdate);
		} else if(req.body.newEmail) {
			//if they just change the email
			//pass the new email to the helper function to change the stored address
			const objToUpdate = { email: req.body.newEmail };
			helpers.updateUser(req, res, objToUpdate);
		} else {
			//if neither a new password nor a new email is received
			helpers.settingsSessMessage(req, res, 'Please check the data you were trying to change and send it again.');
		}
	},
	//to delete the user and all her todos in the db
	deleteUser: (req, res) => {
		console.log(`req.headers.cookie ${util.inspect(req.headers.cookie)}`);
		console.log(`req.headers.password ${req.headers.password}`);
		const sentCookie = cookieHelpers.readCookie(req, 'do-it');
		//sync the users table
			//query the session store for the user's email address based on the
			//cookie stored on the client side
		return models.ConnectSession
		.findOne({
			where: { sid: sentCookie }
		})
		.then((data) => {
			//if the cookie is found
			console.log(`found session? ${util.inspect(data.data)}`);
			//parse the string in the session data column to an object
			const emailObj = JSON.parse(data.data);
			//query the Users table for the user stored in the session
			//if the user is found
			console.log(`found user? ${util.inspect(emailObj)}`);
			const hash = helpers.getHash(req.headers.password, emailObj.password);
			//if the password sent to authorize delete matches the stored hash
			if(hash) {
				console.log('password is correct');
				//delete the User and cascade delete all her todos
				return models.User
				.destroy({
					//object destructuring doesn't work here either. pooh!
					where: { email: emailObj.email }
				})
				.then((data) => {
					//if a response is received from deleting the user
					//console.log(`data ${util.inspect(data)}`);
					//console.log(typeof data);
					if(data === 0) {
					//the user wasn't deleted
						helpers.sessionMessage(req, res, `Sorry, your account wasn't deleted.  Please check your credentials and try again.`, 'login.hbs');
					} else if(data === 1) {
						//the user was deleted so delete her session as well
						req.session.destroy();
						res.render('login.hbs', {data: 'Your account and all your to-dos were successfully deleted.', layout: false});
					}
				})
				.catch((error) => {
					//no data was received from deleting the user
					console.log('error, destroy user call failed');
					throw error;
				});
			} else {
				//if the password sent to authorize the user delete
				//doesn't match the stored hash
				helpers.sessionMessage(req, res, 'Your password is incorrect.  Please try again.', 'login.hbs');
			}
		})
		.catch((error) => {
			//if the client side cookie is not found in the session store
			console.log(`error, find session call failed.`);
			helpers.sessionMessage(req, res, 'Error deleting your account.  Please login again.', 'login.hbs');
			throw error;
		});
	}
}




module.exports = controller;
