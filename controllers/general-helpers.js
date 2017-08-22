const models = require('../models');
const util = require('util');
const fs = require('fs');

const helpers = {
	cleanObj: (obj) => {
		for (let propName in obj) {
			if (obj[propName] === null || obj[propName] === undefined) {
				delete obj[propName];
			}
		}
		console.log(obj);
		if(Object.keys(obj).length === 0) {
			return false;
		} else {
			return obj;
		}
	},
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

module.exports = helpers;
