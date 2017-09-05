const express = require('express');

const router = new express.Router;

const userController = require('../controllers/user');
const resetController = require('../controllers/reset');
const mailController = require('../controllers/mail');

const helpers = require('../controllers/user-helpers');

const util = require('util');

//++++++ USER routes ++++++

//render landing page based on logged in status
router.get('/', (req, res) => {
	console.log(util.inspect(req.session) + 'reqsess root router');
	userController.renderIndex(req, res);
});

//get mail page
router.get('/mail', (req, res) => {
	mailController.renderMailPage(req, res);
})

//send mail
router.post('/mail', (req, res) => {
	mailController.sendUserMail(req, res);
})

//render signup page
router.get('/user/signup', (req, res) => {
	if(req.session.message) {
		let tempMsg = req.session.message;
		let tempType = req.session.messageType;
		req.session.message = null;
		req.session.messageType = null;
		res.render('login/signup.hbs', {
			messages: [{
				text: tempMsg,
				id: tempType
			}],
			specificScripts: [
				"/js/login-settings.js"
			],
			signup: true
		});
	} else {
		res.render('login/signup.hbs', {
			specificScripts: [
				"/js/login-settings.js"
			]
		});
	}

});

//Create new user
router.post('/user/signup', (req, res) => {
	userController.signupUser(req, res);
});

//render login page
router.get('/user/login', (req, res) => {
	if(req.session.message) {
		let tempMsg = req.session.message;
		let tempType = req.session.messageType;
		req.session.message = null;
		req.session.messageType = null;
		res.render('login/login.hbs', {
			messages: [{
				text: tempMsg,
				id: tempType
			}],
			specificScripts: [
				"/js/login-settings.js"
			]
		});
	} else {
		res.render('login/login.hbs', {
			specificScripts: [
				"/js/login-settings.js"
			]
		});
	}

});

//Login new user
router.post('/user/login', (req, res) => {
	userController.loginUser(req, res);
});

//get user settings
router.get('/user', (req, res) => {
	userController.userSettings(req, res);
});

//Update user
router.post('/user', (req, res) => {
	userController.updateUser(req, res);
});

//Delete user
router.delete('/user', (req, res) => {
	userController.deleteUser(req, res);
});

//logout user
router.get('/user/logout', (req, res) => {
	userController.logoutUser(req, res);
});

//get page to request password reset
router.get('/reset/request', (req, res) => {
	helpers.clearSessionMessage(req, res);
	res.render('login/reset-request.hbs', {
		specificScripts: [

			"/js/login-settings.js"
		]
	});
});

//generate a reset email
router.post('/reset/request', (req, res) => {
	resetController.lookupReset(req, res);
});

//load the page to enter the new password
router.get('/reset/:code', (req, res) => {
	helpers.clearSessionMessage(req, res);
	resetController.showResetPage(req, res);
});

//actually set a new password from reset email
router.post('/reset/:code', (req, res) => {
	resetController.resetPassword(req, res);
});

router.post('/message/dismiss', (req, res) => {
	userController.dismissMessage(req, res);
});

router.post('/user/delete', (req, res) => {
	userController.deleteUser(req, res);
});

router.get('/user/delete/success', (req, res) => {
	console.log(util.inspect(req.session) + '/user/delete/success router reqsess');
	res.redirect('/');
});

router.get('/user/delete/fail', (req, res) => {
	res.redirect('/user');
});

module.exports = router;
