const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/gi-path/gi-bx', (req, res) => {
	//IHC modal routes
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	controller.openAccess(req, res, './page-views/gi-path/gi-bx.hbs', [
		"../json/json-gi.js",
		"../js/gi-path/gi-scripts.js",
	]);
});

router.get('/gi-path/liver-bx', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	controller.userWall(req, res, './page-views/gi-path/liver-bx.hbs', [
		"../json/json-liver.js",
		"../js/gi-path/liver-scripts.js"
	]);
});


module.exports = router;
