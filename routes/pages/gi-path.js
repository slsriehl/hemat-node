const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;

const userWall = require('../middleware/user-wall');

//gi-bx is the default
router.get('/', (req, res) => {
	return render(req, res, './page-views/gi-path/gi-bx.hbs', [
		"/json/json-gi.js",
		"/js/gi-path/gi-scripts.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});

router.get('/gi-bx', (req, res) => {
	return render(req, res, './page-views/gi-path/gi-bx.hbs', [
		"/json/json-gi.js",
		"/js/gi-path/gi-scripts.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});

router.get('/liver-bx', userWall, (req, res) => {
	return render(req, res, './page-views/gi-path/liver-bx.hbs', [
		"/json/json-liver.js",
		"/js/gi-path/liver-scripts.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});


module.exports = router;
