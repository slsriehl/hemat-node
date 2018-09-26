
const models = require('../models');

const util = require('util');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const Promise = require('bluebird');

const generalHelpers = require('./general-helpers');
const cookieHelpers = require('./cookie-helpers');

const helpers = {
	//bcrypt save password
	setHash: (password) => {
		const salt = bcrypt.genSaltSync(10);
		if(password) {
			return bcrypt.hashSync(password, salt);
		} else {
			return null;
		}
	},
	//bcrypt retrieve password
	getHash: (password, hash) => {
		return bcrypt.compareSync(password, hash);
	},
	getSystemMessages: (req, res, renderPath) => {
		req.session.unAuthSystemMessages = [];
		const thisDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss').toString();
		console.log(thisDate);
		return models.sequelize.query("SELECT sm.id, sm.message FROM SystemMessages sm WHERE sm.auth = true AND NOT EXISTS (SELECT dm.messageId FROM DismissedMessages dm LEFT JOIN Users u ON dm.userId = u.id WHERE sm.id = dm.messageId AND u.id = " + req.session.user + ") AND sm.expires >= '" + thisDate + "';", {
			type: models.Sequelize.QueryTypes.SELECT
		})
		.then((results) => {
			//if there are no system messages, return null
			if(results.length == 0) {
				return Promise.resolve(null);
			} else {
				let systemMessages = [];
				for(let i = 0; i < results.length; i++) {
					let systemMessage = {
						text: results[i].message,
						id: results[i].id
					}
					systemMessages.push(systemMessage);
				}
				//if there are system messages, return them
				return Promise.resolve(systemMessages);
			}
		})
		.then((results) => {
			req.session.systemMessages = results;
			//if there is a session message, add it to the messages
			if(req.session.message && renderPath != null) {
				console.log('getSystem fire sessmsg + renderPath');
				let totalMessages = req.session.systemMessages || [];
				let tempMsg = req.session.message;
				let tempType = req.session.messageType;
				req.session.message = null;
				req.session.messageType = null;
				let sessMsg = {
					text: tempMsg,
					id: tempType
				}
				totalMessages.push(sessMsg);
				res.render(renderPath, {
					messages: req.session.privacyMessage.concat(totalMessages),
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					}
				});
			} else if(renderPath != null) {
				console.log('getSystem no sessmsg but renderPath');
				res.render(renderPath, {
					messages: req.session.privacyMessage.concat(req.session.systemMessages),
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					}
				});
			} else {
				console.log('getSystem no renderPath');
				res.send('messages updated');
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
		});
	},
	clearSessionMessage: (req, res) => {
		req.session.message = null;
		req.session.messageType = null;
	},
}

module.exports = helpers;
