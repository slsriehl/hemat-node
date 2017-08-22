const express = require('express');

const router = new express.Router;

const controller = require('../../controllers/pages');

router.get('/autopsy/weights-table', (req, res) => {
	//not behind a login
	res.render('./page-views/autopsy/weights-table.hbs', {
		specificScripts: [
			'/path/to/scripts',
			'/path/to/scripts'
		]
	});
});

router.get('/autopsy/stillbirth', (req, res) => {
	//behind a user login
	controller.userWall(req, res, './page-views/autopsy/stillbirth.hbs', [
		'/path/to/scripts',
		'/path/to/scripts'
	]);
});



module.exports = router;
