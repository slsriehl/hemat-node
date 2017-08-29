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
	getIhcPresets: (req) => {
		return models.IhcPresets
		.findAll({
			attributes: ['interp', 'name'],
			where: {
				$or: [{
					userId: 1
				}, {
					userId: req.session.user
				}]
			}
		})
		.then((data) => {
			if(data.length) {
				let allPresets = [];
				for(let i = 0; i < data.length; i++) {
					const presets = {
						interp: data[i].dataValues.interp,
						name: data[i].dataValues.name
					}
					allPresets.push(presets);
				}
				console.log(allPresets);
				return Promise.resolve(allPresets);
			} else {
				return Promise.resolve(null);
			}
		})
	},

}


module.exports = helpers;
