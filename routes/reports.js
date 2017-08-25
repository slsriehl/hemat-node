const express = require('express');

const router = new express.Router;

const reportsController = require('../controllers/reports');

const util = require('util');

router.post('/report/submit', (req, res) => {
	reportsController.receiveReport(req, res);
});



module.exports = router;
