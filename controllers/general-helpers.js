const models = require('../models');

const Promise = require('bluebird');

const moment = require('moment');
const path = require('path');
const fs = Promise.promisifyAll(require('fs')); //promisify
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
				let newString = helpers.strReplaceLineBreaks(value);
				obj[key] = newString;
			}
		}
		return obj;
	},
	strReplaceLineBreaks: (str) => {
		return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
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
	writeToErrorLog:  (req, error) => {
		const errorText = `****** NEW ERROR AT HEMATOGONES.COM ******\n\n\
		#date: \n			${moment().utc().format('YYYY-MM-DD HH:mm:ss UTC')} \n\n\
		#user: \n			${req.session.user} \n\n\
		#user IP: \n			${req.ip} \n\n\
		#protocol: \n			${req.protocol} \n\n\
		#secure connection?: \n			${req.secure} \n\n\
		#headers: \n			${JSON.stringify(req.headers)} \n\n\
		#original url: \n			${req.originalUrl} \n\n\
		#request url: \n			${req.path} \n\n\
		#ajax request?: \n			${req.xhr} \n\n\
		#promise error: \n			${error} \n\n\
		****** END ERROR ******\n\n\n\n`;
		fs.appendFileAsync('./errors/error-log.md', errorText)
		.then((e) => {
			if(e) {
				console.log('error was not appended to log because ' + e);
			}
		});
	}
};

module.exports = helpers;
