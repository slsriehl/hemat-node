const express = require('express');

const router = new express.Router;

const reportsController = require('../controllers/reports');
const mailController = require('../controllers/mail');

const util = require('util');

router.post('/report/submit', (req, res) => {
	reportsController.receiveReport(req, res);
});

router.get('/report/download/:report', (req, res) => {
	reportsController.downloadReport(req, res);
});

router.get('/report/mail/:report', (req, res) => {
	mailController.emailReport(req, res);
});

//download a guest report
// router.get('/report/guest/:report', (req, res) => {
// 	reportsController.downloadGuest(req, res);
// });

router.get('/reports/history', (req, res) => {
	reportsController.reportHistory(req, res);
});

router.get('/copy/:id', (req, res) => {
	reportsController.copyReport(req, res);
});


module.exports = router;
