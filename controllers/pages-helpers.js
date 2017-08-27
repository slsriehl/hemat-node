const util = require('util');

const models = require('../models');

const Promise = require('bluebird');

const helpers = {
	getCaseReferences: (req) => {
		return models.CaseReferences
		.findAll({
			attributes: ['id', 'reference'],
			where: {
				userId: req.session.user
			}
		})
	},
	getAnyReports: (req) => {
		return models.Reports
		.findOne({
			attributes: ['id'],
			where: {
				userId: req.session.user
			}
		})
	},
	getPreviousReports: (req) => {
		return models.Reports
		.findAll({
			attributes: ['id', 'singleSection', 'comments', 'createdAt'],
			where: {
				userId: req.session.user,
				appId: req.session.app
			},
			include: [{
				model: models.CaseReferences,
				attributes: ['reference']
			}, {
				model: models.Apps,
				attributes: ['name', 'slug'],
				include: [{
					model: models.AppGroups,
					attributes: ['slug']
				}]
			}]
		})
	},
	getAppId: (req) => {
		const slugArr = req.originalUrl.split('/');
		const slug = slugArr[slugArr.length - 1];
		return models.Apps
		.findOne({
			attributes: ['id'],
			where: {
				slug: slug
			}
		})
	},
}


module.exports = helpers;
