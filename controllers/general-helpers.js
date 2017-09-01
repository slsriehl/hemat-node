const models = require('../models');

const Promise = require('bluebird');

const path = require('path');
const fs = require('fs'); //promisify
const mime = require('mime');

const util = require('util');
const escape = require('escape-html');

const helpers = {
	cleanObj: (obj) => {
		for (let [key, value] of helpers.entries(obj)) {
			console.log(undefined);
			console.log('before ' + key + ' ' + value);
			switch(value) {
				case null:
				case false:
				case undefined:
				case '':
					delete obj[key];
					break;
				default:
				if(typeof(value) == 'string') {
					value = escape(value.trim());
				}
					break;
			}
			console.log('after ' + key + ' ' + value);
			// if (obj[propName] === null || obj[propName] === undefined ||) {
			// 	;
			// }
		}

		console.log(`final obj returned or not ${util.inspect(obj)}`);
		if(Object.keys(obj).length === 0) {
			return false;
		} else {
			return helpers.replaceLineBreaks(obj);
		}
	},
	generateKeyArr: (obj) => {
		let toArray = [];
		for(let [key, value] of helpers.entries(obj)) {
			if (!key.includes('Id')) {
				toArray.push(key);
			}
		}
		console.log('toArray ' + toArray);
		return toArray;
	},
	entries: function* (obj) {
		for(let key of Object.keys(obj)) {
			yield[key, obj[key]];
		}
	},
	replaceLineBreaks: (obj) => {
		for(let [key, value] of helpers.entries(obj)) {
			if (typeof(value) == 'string' && value.includes('\n')) {
				let newString = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
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
			if (typeof(value) == 'string' && value.includes('<br />')) {
				let newString = value.replace(/<br\s*[\/]?>/gi, '\n');
				obj[key] = newString;
			}
		}
		return obj;
	},
	// toHtmlEntities: (string) => {
  //   return string.replace(/./gm, (s) => {
  //       return "&#" + s.charCodeAt(0) + ";";
  //   });
	// },
	// fromHtmlEntities: (string) => {
  //   return (string + "").replace(/&#\d+;/gm, (s) => {
  //       return String.fromCharCode(s.match(/\d+/gm)[0]);
  //   });
	// },
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
