const models = require('../models');

const Promise = require('bluebird');

const path = require('path');
const fs = require('fs'); //promisify
const mime = require('mime');

const util = require('util');

const helpers = {
	cleanObj: (obj, toArray) => {
		for (let [key, value] of helpers.entries(obj)) {
			switch(value) {
				case null:
					delete key;
					break;
				case false:
					delete key;
					break;
				case undefined:
					delete key;
					break;
				case '':
					delete key;
					break;
				default:
				if(typeof(value) == 'string')
					value = value.trim()
					break;
			}
			// if (obj[propName] === null || obj[propName] === undefined ||) {
			// 	;
			// }
		}

		console.log(`final obj returned or not ${util.inspect(obj)}`);
		if(Object.keys(obj).length === 0) {
			return false;
		} else if(toArray) {
			for(let [key, value] of helpers.entries(obj)) {
				if (key.includes('Id')) {
					delete key;
				} else {
					toArray.push(key);
				}
			}
			console.log('toArray' + util.inspect(toArray));
			return helpers.replaceLineBreaks(obj);
		} else {
			return helpers.replaceLineBreaks(obj);
		}
	},
	entries: function* (obj) {
		for(let key of Object.keys(obj)) {
			yield[key, obj[key]];
		}
	},
	replaceLineBreaks: (obj) => {
		for(let [key, value] of helpers.entries(obj)) {
			if (typeof(value) == 'string' && value.includes('\n')) {
				let newString = value.replace(/(?:\r\n|\r|\n)/g, '<br /><br />');
				obj[key] = newString;
			}
		}
		return obj;
	},
	removeLineBreaks: (str) => {
		console.log('str ' + str);
		let newString = str.replace(/<br\s*[\/]?>/gi, '  ');
		console.log('newString ' + newString);
		return newString;
	},
	jsLineBreaks: (obj) => {
		for(let [key, value] of helpers.entries(obj)) {
			if (typeof(value) == 'string' && value.includes('<br /><br />')) {
				let newString = value.replace(/<br\s*[\/]?>/gi, '\n');
				obj[key] = newString;
			}
		}
		return obj;
	},
	resolvePath: (thePath) => {
		return path.resolve(thePath);
	},
	mimeLookup: (file) => {
		return mime.lookup(file);
	},
	writeToErrorLog:  (req) => {
		fs.appendFile('../errors/error-log.txt', req, (error) => {
			if(error) console.log(error);
			console.log('there has been an error.  the request object was logged to the error log');
		})
	}
};

module.exports = helpers;
