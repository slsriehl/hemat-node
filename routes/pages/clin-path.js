const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;

//bal is the default
router.get('/', (req, res) => {
	return render(req, res, './page-views/clin-path/bal.hbs', [
		"/json/json-bal.js",
		"/js/clin-path/bal-scripts.js"
	]);
});

router.get('/csf', (req, res) => {
	return render(req, res, './page-views/clin-path/csf.hbs', [
		"/json/json-csf.js",
		"/js/clin-path/csf-scripts.js"
	]);
});

router.get('/bal', (req, res) => {
	return render(req, res, './page-views/clin-path/bal.hbs', [
		"/json/json-bal.js",
		"/js/clin-path/bal-scripts.js"
	]);
});

router.get('/body-fluid', (req, res) => {
    return render(req, res, './page-views/clin-path/body-fluid.hbs', [
        "/json/json-bf.js",
        "/js/clin-path/bf-scripts.js",
        "/js/clin-path/ihc-cyto-scripts.js"

    ]);
});

router.get('/antibody-id', (req, res) => {
	return render(req, res, './page-views/clin-path/antibody-id.hbs', [
		"/json/json-abid.js",
		"/js/clin-path/antibody-scripts.js"
	]);
});

router.get('/tx-rxn', (req, res) => {
	return render(req, res, './page-views/clin-path/tx-rxn.hbs', [
		"/json/json-txrxn.js",
		"/js/clin-path/txrxn-scripts.js"
	]);
});

router.get('/kb', (req, res) => {
    return render(req, res, './page-views/clin-path/kb.hbs', [
    "/js/clin-path/kb-scripts.js"
]);
});

module.exports = router;
