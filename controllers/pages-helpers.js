const util = require('util');

const models = require('../models');

const helpers = {
	getCaseReferences: (req, res, renderPath, scripts) => {
		return models.CaseReferences
		.findAll({
			attributes: ['id', 'reference'],
			where: {
				userId: req.session.user
			}
		})
		.then((data) => {
			console.log('userwall case ref data' + util.inspect(data));
			const allCases = [];
			for(let i = 0; i < data.length; i++) {
				const oneCase = {
					id: data[i].id,
					text: data[i].reference
				}
				allCases.push(oneCase);
			}
			console.log('all cases' + util.inspect(allCases));
			res.render(renderPath, {
				messages: req.session.systemMessages,
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				},
				specificScripts: scripts,
				cases: allCases
			});
		})
		.catch(error => console.log(error));
	}
}


module.exports = helpers;
