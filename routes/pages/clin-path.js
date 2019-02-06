const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/clin-path/csf', (req, res) => {
	controller.openAccess(req, res, './page-views/clin-path/csf.hbs', [
		"/json/json-csf.js",
		"/js/clin-path/csf-scripts.js"
	]);
});

router.get('/clin-path/bal', (req, res) => {
	controller.openAccess(req, res, './page-views/clin-path/bal.hbs', [
		"/json/json-bal.js",
		"/js/clin-path/bal-scripts.js"
	]);
});

router.get('/clin-path/body-fluid', (req, res) => {
    controller.openAccess(req, res, './page-views/clin-path/body-fluid.hbs', [
        "/json/json-bf.js",
        "/js/clin-path/bf-scripts.js"
    ]);
});

router.get('/clin-path/antibody-id', (req, res) => {
	controller.openAccess(req, res, './page-views/clin-path/antibody-id.hbs', [
		"/json/json-abid.js",
		"/js/clin-path/antibody-scripts.js"
	]);
});

router.get('/clin-path/tx-rxn', (req, res) => {
	controller.openAccess(req, res, './page-views/clin-path/tx-rxn.hbs', [
		"/json/json-txrxn.js",
		"/js/clin-path/txrxn-scripts.js"
	]);
});

router.get('/clin-path/kb', (req, res) => {
    controller.openAccess(req, res, './page-views/clin-path/kb.hbs', [
    "/js/clin-path/kb-scripts.js"
]);
});

module.exports = router;
