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
		.then((data) => {
			const myRefs = [];
			for(let i = 0; i < data.length; i++) {
				const oneRef = {
					id: data[i].dataValues.id,
					text: data[i].dataValues.reference
				}
				myRefs.push(oneRef);
			}
			console.log('all cases' + util.inspect(myRefs));
			return Promise.resolve(myRefs);
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
