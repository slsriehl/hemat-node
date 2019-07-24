const express = require('express');

const router = new express.Router;

const render = require('../../controllers/pages').render;

//weights is the default
router.get('/', (req, res) => {
	//not behind a login
	return render(req, res, './page-views/autopsy/autopsy-weights.hbs', [
        "/js/autopsy/autopsy-weights-scripts.js"
	]);
});

router.get('/weights', (req, res) => {
	//not behind a login
	return render(req, res, './page-views/autopsy/autopsy-weights.hbs', [
        "/js/autopsy/autopsy-weights-scripts.js"
	]);
});

router.get('/autopsy-pedi', (req, res) => {
    //not behind a login
    return render(req, res, './page-views/autopsy/autopsy-pedi.hbs', [
        "/js/autopsy/autopsy-pedi-scripts.js"
    ]);
});


module.exports = router;
