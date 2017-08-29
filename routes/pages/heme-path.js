const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');


//routes to get the pages to create a fresh report
router.get('/heme-path/pb-smears', (req, res) => {
	controller.openAccess(req, res, './page-views/heme-path/pb-smears.hbs', [
		"../json/json-pbsmears.js",
		"../js/heme-path/pb-rules.js",
		"../js/heme-path/pb-scripts.js"
	]);
});

router.get('/heme-path/bone-marrow', (req, res) => {
	controller.openAccess(req, res, './page-views/heme-path/bone-marrow.hbs', [
		"../json/json-bonemarrow.js",
		"../js/heme-path/bm-diff-scripts.js",
		"../js/heme-path/bm-scripts.js",
		"../js/heme-path/pb-rules.js",
		"../js/surg-path/ihc-scripts.js"
	]);
});

router.get('/heme-path/heme-diff', (req, res) => {
	controller.openAccess(req, res, './page-views/heme-path/heme-diff.hbs', [
		"../js/heme-path/hemediff-scripts.js"
	]);
});

router.get('/heme-path/counter', (req, res) => {
	controller.openAccess(req, res, './page-views/heme-path/counter.hbs', [
		"../js/heme-path/counter-scripts.js"
	]);
});

router.get('/heme-path/dlbcl', (req, res) => {
	controller.userWall(req, res, './page-views/heme-path/dlbcl.hbs', [
		"../js/heme-path/dlbcl-scripts.js"
	]);
});

module.exports = router;
