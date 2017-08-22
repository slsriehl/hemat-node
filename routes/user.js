const express = require('express');

const router = new express.Router;

const userController = require('../controllers/user');

//++++++ USER routes ++++++

//render landing page based on logged in status
router.get('/', (req, res) => {
	userController.renderIndex(req, res);
});

//render signup page
router.get('/user/signup', (req, res) => {
	res.render('login/signup.hbs');
});

//Create new user
router.post('/user/signup', (req, res) => {
	userController.signupUser(req, res);
});

//render login page
router.get('/user/login', (req, res) => {
	res.render('login/login.hbs');
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

router.get('/user/clean', (req, res) => {
	userController.cleanObjTest();
})

module.exports = router;
