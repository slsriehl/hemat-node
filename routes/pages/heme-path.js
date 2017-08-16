const express = require('express');

const router = new express.Router;

router.get('/heme-path/pb-smears', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/heme-path/pb-smears.hbs',
	{"specificScripts":
		[
			"../json/json-pbsmears.js",
			"../js/heme-path/pb-rules.js",
			"../js/heme-path/pb-scripts.js"
		]
	});
});

router.get('/heme-path/bone-marrow', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/heme-path/bone-marrow.hbs',
	{"specificScripts":
		[
			"../json/json-bonemarrow.js",
			"../js/heme-path/bm-diff-scripts.js",
			"../js/heme-path/bm-scripts.js",
			"../js/heme-path/pb-rules.js"
		]
	});
});

router.get('/heme-path/heme-diff', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/heme-path/heme-diff.hbs',
	{"specificScripts":
		[
			"../js/heme-path/hemediff-scripts.js"
		]
	});
});

router.get('/heme-path/counter', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/heme-path/counter.hbs',
	{"specificScripts":
		[
			"../js/heme-path/counter-scripts.js"
		]
	});
});

router.get('/heme-path/dlbcl', (req, res) => {
	//Report saving & PDFing: AJAX & controller: front end script to generate report, AJAX POST to controller to store in DB per person, generate PDF report & send to file system, and template success/result for download
	//initial page load with data: controller: if the user has previous reports, pull data & template results including download button
	//previous report handling: AJAX & controller: if the user selects a previous report, template text from DB & populate generate report button auto download
	res.render('./page-views/heme-path/dlbcl.hbs',
	{"specificScripts":
		[
			"../js/heme-path/dlbcl-scripts.js"
		]
	});
});


module.exports = router;
