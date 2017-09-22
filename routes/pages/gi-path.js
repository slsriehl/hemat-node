const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/gi-path/gi-bx', (req, res) => {
	controller.openAccess(req, res, './page-views/gi-path/gi-bx.hbs', [
		"/json/json-gi.js",
		"/js/gi-path/gi-scripts.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});

router.get('/gi-path/liver-bx', (req, res) => {
	controller.userWall(req, res, './page-views/gi-path/liver-bx.hbs', [
		"/json/json-liver.js",
		"/js/gi-path/liver-scripts.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});


module.exports = router;
