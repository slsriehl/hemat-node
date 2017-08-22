const models = require('../models');
const util = require('util');
const fs = require('fs');

const helpers = {
	cleanObj: (obj) => {
		for (let propName in obj) {
			switch(obj[propName]) {
				case null:
					delete obj[propName];
					break;
				case false:
					delete obj[propName];
					break;
				case undefined:
					delete obj[propName];
					break;
				case '':
					delete obj[propName];
					break;
				default:
					// console.log(`${obj[propName]} retained in obj`)
					break;
			}
			// if (obj[propName] === null || obj[propName] === undefined ||) {
			// 	;
			// }
		}
		console.log(`final obj returned or not ${util.inspect(obj)}`);
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
