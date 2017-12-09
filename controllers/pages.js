
const cookieHelpers = require('./cookie-helpers');
const generalHelpers = require('./general-helpers');
const helpers = require('./pages-helpers');
const reportsHelpers = require('./reports-helpers');

const models = require('../models');

const util = require('util');
const escape = require('escape-html');
const unescape = require('unescape-html');

const Promise = require('bluebird');

//const userHelpers = require('./user-helpers');

const controller = {
	userWall: (req, res, renderPath, scripts, css) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			let myRefs;
			let anyReports;
			let prevReps;
			let ihcPresets;
			let snippets;
			return helpers.getAppId(req)
			.then((result) => {
				req.session.app = result.dataValues.id;
				const thisApp = req.session.app;
				if(thisApp === 8 || thisApp === 12 || thisApp === 15 || thisApp === 16) {
					return helpers.getIhcPresets(req)
				} else {
					return Promise.resolve(null)
				}
			})
			.then((result) => {
				//set
				ihcPresets = result;
				//get case references
				return helpers.getCaseReferences(req)
				// return Promise.all([helpers.getCaseReferences(req), reportsHelpers.getAnyReports(req), reportsHelpers.getPreviousReports(req)])
			})
			.then((result) => {
				//set the results of case references equal to a var
				myRefs = result;
				return reportsHelpers.getAnyReports(req)
			})
			.then((result) => {
				anyReports = result;
				if(result == null) {
					//this will set the value for previous reports to null is there aren't any reports at all
					return Promise.resolve(null);
				} else {
					return reportsHelpers.getPreviousReports(req)
				}
			})
			.then((result) => {
				prevReps = result;
				if(renderPath == './page-views/surg-path/snippets.hbs') {
					snippets = true;
				}
				res.render(renderPath, {
					messages: req.session.systemMessages,
					isAuth: {
						check: req.session.isAuth,
						firstname: req.session.firstname
					},
					specificScripts: scripts,
					cases: myRefs,
					prevRep: {
						any: anyReports,
						thisApp: prevReps
					},
					ihcPresets: ihcPresets,
					snippets: snippets,
					specificCss: css
				});
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
			});
		} else {
			res.render('index.hbs', {
				messages: [{
					text: 'You need an account to access that resource.  <a href="/user/signup">Sign up</a>.',
					id: `access-denied`
				}]
			});
		}
	},
	openAccess: (req, res, renderPath, scripts) => {
		console.log(req.session);
		if(cookieHelpers.verifyCookie(req, res)) {
			controller.userWall(req, res, renderPath, scripts);
		} else {
			return helpers.getAppId(req)
			.then((result) => {
				console.log(result);
				req.session.app = result.dataValues.id;
				res.render(renderPath, {
					messages: [
						...req.session.unAuthSystemMessages,
						{
						text: '<a href="/user/signup">Sign up</a> to save, edit, and PDF your reports and access more resources.',
						id: 'you-should-sign-up'
					}],
					specificScripts: scripts
				});
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
			});
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
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
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
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
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
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send(false);
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
			} else if (data == false) {
				return;
			} else {
				res.send(false);
			}
		})
		.catch(error => {
			generalHelpers.writeToErrorLog(req, error);
			console.log(error);
			res.send(false);
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
			})
			.catch(error => {
				generalHelpers.writeToErrorLog(req, error);
				console.log(error);
				res.send(false);
			});
		} else {
			res.send("You can't delete that snippet because you don't own it.");
		}

	},
}

module.exports = controller;
