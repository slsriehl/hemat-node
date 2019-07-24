
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const helpers = require('./pages-helpers');
const reportsHelpers = require('./reports-helpers');

const models = require('../models');

const util = require('util');
const escape = require('escape-html');
const unescape = require('unescape-html');

 

//const userHelpers = require('./user-helpers');

const hasPresets = (app, req) => {
	if(app === 8 || app === 12 || app === 15 || app === 16) {
		return helpers.getIhcPresets(req);
	} else {
		return Promise.resolve(null);
	}
}

const controller = {
	render: (req, res, renderPath, scripts, css = [], more = {}) => {
		if(req.session.isAuth) {
			return controller.loggedIn(req, res, renderPath, scripts, css, more)
		} else {
			return controller.guestUser(req, res, renderPath, scripts, css, more)
		}
	},
	loggedIn: (req, res, renderPath, scripts, css, more) => {
		let snippets = renderPath == './page-views/surg-path/snippets.hbs' ? true : false;

		return Promise.all([
			helpers.getAppId(req),
			reportsHelpers.getAnyReports(req)
		])
		.then(([app, reports]) => {
			req.session.app = app.dataValues.id;
			const thisApp = req.session.app;

			return Promise.all([
				hasPresets(thisApp, req),
				helpers.getCaseReferences(req),
				Promise.resolve(reports),
				(reports ? reportsHelpers.getPreviousReports(req) : Promise.resolve(null))
			])
		})
		.then(([ihcPresets, myRefs, anyReps, prevReps]) => {

			let info = {
				messages: req.session.privacyMessage.concat(req.session.systemMessages ? req.session.systemMessages : []),
				isAuth: {
					check: req.session.isAuth,
					firstname: req.session.firstname
				},
				specificScripts: scripts,
				cases: myRefs,
				prevRep: {
					any: anyReps,
					thisApp: prevReps
				},
				ihcPresets: ihcPresets,
				snippets: snippets,
				specificCss: css
			}

			let data = Object.assign({}, info, more)

			res.render(renderPath, data);

			return Promise.resolve(true);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.status(500).end();
			return Promise.resolve(false);
		});
	},
	guestUser: (req, res, renderPath, scripts, css, more) => {
		return helpers.getAppId(req)
		.then((result) => {
			// console.log(result);
			req.session.app = result.dataValues.id;

			let info = {
				messages: [
					...req.session.privacyMessage,
					...req.session.unAuthSystemMessages,
					{
					text: '<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.',
					id: 'you-should-sign-up'
				}],
				specificScripts: scripts
			}

			let data = Object.assign({}, info, more)

			res.render(renderPath, data);

			return Promise.resolve(true);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.status(500).end();
			return Promise.resolve(false);
		});
	},
	saveIhcPreset: (req, res) => {
		console.log(req.body);
		return models.IhcPresets
		.create({
			name: req.body.newName.trim(),
			interp: req.body.newInterp.trim(),
			userId: req.session.user
		})
		.then((result) => {
			res.end();
			return Promise.resolve(true);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.status(500).end();
			return Promise.resolve(false);
		});
	},
	searchSnippets: (req, res) => {
		console.log(req.body);
		let searchTerms;
		let searchStr = '';
		let searchResults1 = [];
		let searchResults2 = [];
		searchTerms = req.body.thisSearch.split(/\s+/);
		console.log(searchTerms);
		for(let i = 0; i < searchTerms.length; i++) {
			let str = '+*' + searchTerms[i] + '* ';
			searchStr += str;
		}
		searchStr = searchStr.trim();
		console.log(searchStr);
		const theSearch = 'SELECT entry_id, spc_class, keywords, micros, finals, comments, user_id FROM Snippets WHERE (MATCH(keywords) AGAINST ("' + searchStr + '" IN BOOLEAN MODE) OR MATCH(finals) AGAINST ("' + searchStr + '" IN BOOLEAN MODE)) AND (user_id = "1" OR user_id = "' + req.session.user + '") ORDER BY spc_class, entry_id DESC';
		console.log(theSearch);
		return models.sequelize.query(theSearch)
		.then((data) => {
			console.log(data);
			for(let i = 0; i < data[0].length; i++) {
				searchResults1 = searchResults1.concat(data[0][i]);
			}
			for(let i = 0; i < data[1].length; i++) {
				searchResults1 = searchResults1.concat(data[1][i]);
			}
			console.log(searchResults1);
			for(let i = 0; i < searchResults1.length; i++) {
				if(searchResults1[i].entry_id) {
					let tempObj = searchResults1[i];
					searchResults1.splice(i, 1);
					let text = {
						micros: escape(escape(unescape(tempObj.micros))),
						finals: escape(escape(unescape(tempObj.finals))),
						comments: escape(escape(unescape(tempObj.comments)))
					}
					console.log(text.finals);
					let cleanObj = {
						id: tempObj.entry_id,
						userId: tempObj.user_id,
						spcClass: tempObj.spc_class,
						keywords: tempObj.keywords,
						text: JSON.stringify(text)
					}
					searchResults2.push(cleanObj);
					for(let k = 0; k < searchResults1.length; k++) {
						if(tempObj.entry_id == searchResults1[k].entry_id) {
							searchResults1[k].entry_id = null;
						}
					}
				}
			}
			console.log(searchResults2);
			const sendMe = {
				loggedIn: req.session.user,
				snips: searchResults2
			}
			console.log(sendMe);
			res.json(sendMe);
			return Promise.resolve(true);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.status(500).end();
			return Promise.resolve(false);
		});
	},
	saveSnippet: (req, res) => {
		console.log(req.body);
		let newSnippet = {
			micros: escape(req.body.ent_micro),
			finals: escape(req.body.ent_final),
			comments: escape(req.body.ent_comment),
			user_id: req.session.user,
			spc_class: escape(req.body.ent_class),
			keywords: escape(req.body.tags)
		}
		return models.Snippets
		.create(newSnippet)
		.then((data) => {
			let text = {
				micros: escape(data.dataValues.micros),
				finals: escape(data.dataValues.finals),
				comments: escape(data.dataValues.comments)
			}
			let cleanObj = {
				id: data.dataValues.entry_id,
				userId: data.dataValues.user_id,
				spcClass: data.dataValues.spc_class,
				keywords: data.dataValues.keywords,
				text: JSON.stringify(text)
			}
			res.json({
				snips: [cleanObj]
			});
			return Promise.resolve(true);
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send(false);
			return Promise.resolve(false);
		});
	},
	updateSnippet: (req, res) => {
		console.log(req.body);
		let objToUpdate = {};
		return models.Snippets
		.findOne({
			attributes: ['entry_id'],
			where: {
				user_id: req.session.user,
				entry_id: req.body.ent_id
			}
		})
		.then((data) => {
			console.log(data);
			if(data == null) {
				res.send("You can't update this snippet because you don't own it.");
				return Promise.resolve(false);
			} else {
				return Promise.resolve(true);
			}
		})
		.then((result) => {
			if(result == true) {
				objToUpdate = {
					micros: escape(req.body.ent_micro),
					finals: escape(req.body.ent_final),
					comments: escape(req.body.ent_comment),
					spc_class: escape(req.body.ent_class),
					keywords: escape(req.body.tags)
				}
				return models.Snippets
				.update(objToUpdate, {
					where: {
						entry_id: req.body.ent_id
					}
				})
			} else {
				return Promise.resolve(false);
			}
		})
		.then((data) => {
			console.log(data);
			let resStr = JSON.stringify(data);
			if(resStr == '[1]') {
				let text = {
					micros: escape(objToUpdate.micros),
					finals: escape(objToUpdate.finals),
					comments: escape(objToUpdate.comments)
				}
				let cleanObj = {
					id: req.body.ent_id,
					userId: req.session.user,
					spcClass: objToUpdate.spc_class,
					keywords: objToUpdate.keywords,
					text: JSON.stringify(text)
				}
				res.json({
					snips: [cleanObj]
				});
				return Promise.resolve(true);
			} else if (data == false) {
				return Promise.resolve(true);
			} else {
				res.send(false);
				return Promise.resolve(true);
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send(false);
			return Promise.resolve(false);
		});
	},
	deleteSnippet: (req, res) => {
		console.log(req.body);
		if(req.body.user_id == req.session.user) {
			return models.Snippets
			.destroy({
				where:{
					user_id: req.body.user_id,
					entry_id: req.body.ent_id
				}
			})
			.then((result) => {
				if(result === 1) {
					res.json({
						removeId: req.body.ent_id
					});
				} else {
					res.send(false);
				}
				return Promise.resolve(true);
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
				res.send(false);
				return Promise.resolve(false);
			});
		} else {
			res.send("You can't delete that snippet because you don't own it.");
		}

	},
    saveIhcPreset: (req, res) => {
        console.log(req.body);
        return models.IhcPresets
            .create({
                name: req.body.newName.trim(),
                interp: req.body.newInterp.trim(),
                userId: req.session.user
            })
            .then((result) => {
				res.end();
				return Promise.resolve(true);
            })
            .catch(error => {
                generalHelpers.writeToErrorLog(req, error);
				console.log(error);
				res.status(500).end();
				return Promise.resolve(false);
            });
    }
}

module.exports = controller;
