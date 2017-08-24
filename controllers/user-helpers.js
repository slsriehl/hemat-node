
const models = require('../models');

const util = require('util');
const bcrypt = require('bcryptjs');
const moment = require('moment');

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
	renderSingleMessage: (req, res, renderPath, specificScripts, signupKey) => {
		//render with only a single message
		const singleMessage = req.session.message;
		const singleMessageType = req.session.messageType;
		req.session.message = null;
		req.session.messageType = null;
		res.render(renderPath, {
			messages: [{
				text: singleMessage,
				id: singleMessageType
			}],
			specificScripts: specificScripts,
			signup: signupKey
		});
	},
	getSystemMessages: (req, res, renderPath) => {
		const thisDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss').toString();
		console.log(thisDate);
		return models.sequelize.query("SELECT sm.id, sm.message FROM SystemMessages sm WHERE NOT EXISTS (SELECT dm.messageId FROM DismissedMessages dm LEFT JOIN Users u ON dm.userId = u.id WHERE sm.id = dm.messageId AND u.id = " + req.session.user + ") AND sm.expires >= '" + thisDate + "';", {
			type: models.Sequelize.QueryTypes.SELECT
		})
		.then((results) => {
			console.log(`results: ${results}`);
			if(results.length == 0 && !req.session.message && renderPath) {
				console.log('fire 1 getSystem');
				res.render(renderPath);
			} else if (results.length == 0 && req.session.message && renderPath) {
				console.log('fire 2 getSystem');
				helpers.renderSingleMessage(req, res, renderPath);
			} else {
				console.log('fire 3 getSystem');
				let systemMessages = [];
				for(let i = 0; i < results.length; i++) {
					let systemMessage = {
						text: results[i].message,
						id: results[i].id
					}
					systemMessages.push(systemMessage);
				}
				req.session.systemMessages = systemMessages;
				if(req.session.message) {
					console.log('fire reqsessmsg getSystem');
					const singleMessage = req.session.message;
					const singleMessageType = req.session.messageType;
					req.session.message = null;
					req.session.messageType = null;
					systemMessages.push({
						text: singleMessage,
						id: singleMessageType
					});
				}
				if(renderPath == 'index-redirect') {
					req.session.inclusiveSystemMessages = systemMessages;
					res.redirect('/');
				} else if(renderPath) {
					console.log('fire renderPath getSystem');
					res.render(renderPath, {
						messages: systemMessages,
						isAuth: {
							check: req.session.isAuth,
							firstname: req.session.firstname
						}
					});
				} else {
					res.send(true);
				}
			}
		})
		.catch((error) => console.log(error));

		// return models.DismissedMessages.create({
		// 	userId: 95,
		// 	messageId: 2
		// })
	},
	clearSessionMessage: (req, res) => {
		req.session.message = null;
		req.session.messageType = null;
	},
}

module.exports = helpers;
