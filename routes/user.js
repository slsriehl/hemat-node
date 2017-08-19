const express = require('express');

const router = new express.Router;

const userController = require('../controllers/user');

//++++++ USER routes ++++++

//render landing page based on logged in status
router.get('/', (req, res) => {
	res.render('index.hbs'
	// , {
	// 	login: {
	// 		cookie: true,
	// 		firstname: 'Alvin'
	// 	}
	// }
);
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
	console.log(req.body);
	// userController.loginUser(req, res);
});

//get user settings
router.get('/user', (req, res) => {
	res.render('login/settings.hbs', {
		email: "sallie@gmail.com"
	});
	// userController.userSettings(req, res);
});

//Update user
router.post('/user', (req, res) => {
	console.log(req.body);
	// userController.updateUser(req, res);
});

//Delete user
router.delete('/user', (req, res) => {
	userController.deleteUser(req, res);
});

//logout user
router.delete('/user/logout', (req, res) => {
	userController.logoutUser(req, res);
});

module.exports = router;
