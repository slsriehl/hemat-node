
const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

//needs database connection
router.get('/surg-path/ihc-table', (req, res) => {
	//IHC modal routes
	//initial page load with data: controller: pull data from mysql, template results
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//adding data to DB: AJAX & controller: front end script to receive new data, AJAX POST to controller to store in DB per person, template success
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button autodownload
	//placeholder data
	// const data = [{
	// 		'opt': 'foo',
	// 		'name': 'bar',
	// 		'interp':'baz'
	// 	}];
	controller.userWall(req, res, './page-views/surg-path/ihc-table.hbs', [
		"../js/surg-path/ihc-scripts.js"
	]);
});

router.get('/surg-path/fixation', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	controller.openAccess(req, res, './page-views/surg-path/fixation.hbs', [
		"../vendor/jquery/js/jquery-ui-timepicker-addon.min.js",
		"../js/surg-path/fixation-scripts.js"
	]);
});


router.get('/surg-path/snippets', (req, res) => {
	//search: AJAX & controller: POST search to controller, search DB, template results with delete buttons if same users & not if Chandra's, & view/edit buttons
	//custom helper:  if view/edit button is pushed, template fields into text areas, add generate PDF button
	//AJAX & controller: if snippet is saved save/overwrite in controller/DB (modal for save, save as, & cancel), generate PDF button, template success & download button
	//download controller/route path
	controller.userWall(req, res, './page-views/surg-path/snippets.hbs', [
		"../vendor/tag-it/tag-it.min.js",
		"../js/surg-path/snippets-scripts.js"
	]);
});


module.exports = router;
