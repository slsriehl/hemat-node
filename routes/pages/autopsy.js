const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/autopsy/weights', (req, res) => {
	//not behind a login
	controller.openAccess(req, res, './page-views/autopsy/autopsy-weights.hbs', [
        "/js/autopsy/autopsy-weights-scripts.js"
	]);
});




module.exports = router;
