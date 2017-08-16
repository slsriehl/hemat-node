const express = require('express');

const router = new express.Router;

router.get('/clin-path/csf', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/clin-path/csf.hbs',
	{"specificScripts":
		[
			"../json/json-csf.js",
			"../js/clin-path/csf-scripts.js"
		]
	});
});

router.get('/clin-path/bal', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/clin-path/bal.hbs',
	{"specificScripts":
		[
			"../json/json-bal.js",
			"../js/clin-path/bal-scripts.js"
		]
	});
});

router.get('/clin-path/antibody-id', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/clin-path/antibody-id.hbs',
	{"specificScripts":
		[
			"../json/json-abid.js",
			"../js/clin-path/antibody-scripts.js"
		]
	});
});

router.get('/clin-path/tx-rxn', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/clin-path/tx-rxn.hbs',
	{"specificScripts":
		[
			"../json/json-txrxn.js",
			"../js/clin-path/txrxn-scripts.js"
		]
	});
});

module.exports = router;
