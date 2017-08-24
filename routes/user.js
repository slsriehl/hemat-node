const express = require('express');

const router = new express.Router;

const userController = require('../controllers/user');
const resetController = require('../controllers/reset');

const helpers = require('../controllers/user-helpers');

//++++++ USER routes ++++++

//render landing page based on logged in status
router.get('/', (req, res) => {
	helpers.clearSessionMessage(req, res);
	userController.renderIndex(req, res);
});

//render signup page
router.get('/user/signup', (req, res) => {
	helpers.clearSessionMessage(req, res);
	res.render('login/signup.hbs', {
		signup: true,
		specificScripts: [

			"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
		]
	});
});

//Create new user
router.post('/user/signup', (req, res) => {
	userController.signupUser(req, res);
});

//render login page
router.get('/user/login', (req, res) => {
	helpers.clearSessionMessage(req, res);
	res.render('login/login.hbs', {
		specificScripts: [

			"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
		]
	});
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

			"../vendor/jquery/js/jquery.validate.min.js", "../js/login-settings.js"
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
})

module.exports = router;
