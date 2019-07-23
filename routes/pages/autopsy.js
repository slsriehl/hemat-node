const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

//weights is the default
router.get('/', (req, res) => {
	//not behind a login
	controller.openAccess(req, res, './page-views/autopsy/autopsy-weights.hbs', [
        "/js/autopsy/autopsy-weights-scripts.js"
	]);
});

router.get('/weights', (req, res) => {
	//not behind a login
	controller.openAccess(req, res, './page-views/autopsy/autopsy-weights.hbs', [
        "/js/autopsy/autopsy-weights-scripts.js"
	]);
});

router.get('/autopsy-pedi', (req, res) => {
    //not behind a login
    controller.openAccess(req, res, './page-views/autopsy/autopsy-pedi.hbs', [
        "/js/autopsy/autopsy-pedi-scripts.js"
    ]);
});


module.exports = router;
