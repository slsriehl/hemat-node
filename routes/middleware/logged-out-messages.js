const Promise = require('bluebird');

const models = require('../../models');

const helpers = require('../../controllers/general-helpers');

let middleware = (req, res, next) => {
	if(req.session.user || req.session.unAuthSystemMessages) {
		next();
	} else {
		return models.SystemMessages
		.findAll({
			attributes: ['id', 'message'],
			where: {
				auth: false
			}
		})
		.then((messages) => {
			req.session.unAuthSystemMessages = messages.map((message) => {
				return {
					id: message.dataValues.id,
					text: message.dataValues.message
				}
			})
			return Promise.resolve(next());
		})
		.catch((err) => {
			helpers.writeToErrorLog(req, err);
			return Promise.resolve(next());
		});
	}
}

module.exports = middleware;
