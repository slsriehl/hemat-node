const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;

//heme-diff is the default
router.get('/', (req, res) => {
	return render(req, res, './page-views/heme-path/heme-diff.hbs', [
		"/js/heme-path/hemediff-scripts.js"
	]);
});

//routes to get the pages to create a fresh report
router.get('/pb-smears', (req, res) => {
	return render(req, res, './page-views/heme-path/pb-smears.hbs', [
		"/json/json-pbsmears.js",
		"/js/heme-path/pb-rules.js",
		"/js/heme-path/pb-scripts.js"
	]);
});

router.get('/bone-marrow', (req, res) => {
	return render(req, res, './page-views/heme-path/bone-marrow.hbs', [
		"/json/json-bonemarrow.js",
		"/js/heme-path/bm-diff-scripts.js",
		"/js/heme-path/bm-scripts.js",
		"/js/heme-path/pb-rules.js",
		"/js/surg-path/ihc-scripts.js"
	]);
});

router.get('/heme-diff', (req, res) => {
	return render(req, res, './page-views/heme-path/heme-diff.hbs', [
		"/js/heme-path/hemediff-scripts.js"
	]);
});

router.get('/counter', (req, res) => {
	return render(req, res, './page-views/heme-path/counter.hbs', [
		"/js/heme-path/counter-scripts.js"
	]);
});

router.get('/dlbcl', (req, res) => {
	return render(req, res, './page-views/heme-path/dlbcl.hbs', [
		"/js/heme-path/dlbcl-scripts.js"
	]);
});

router.get('/heme-media', (req, res) => {
    return render(req, res, './page-views/heme-path/newborn-pbsmears-media.hbs', [
        
    ]);
});

module.exports = router;
