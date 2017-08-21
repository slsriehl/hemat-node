const models = require('../models');
const util = require('util');
const fs = require('fs');

const controller = {
	writeToErrorLog:  (req) => {
		fs.appendFile('../errors/error-log.txt', req, (error) => {
			if(error) console.log(error);
			console.log('there has been an error.  the request object was logged to the error log');
		})
	},
	sendMail: (req, res) => {
		console.log('send mail fired');
	},
};

module.exports = controller;
