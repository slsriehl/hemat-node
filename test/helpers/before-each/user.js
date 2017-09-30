
const models = require('../../../models');

const path = require('path');

const Promise = require('bluebird');

const fs = Promise.promisifyAll(require('fs'));

const popCredentials = require('../../email-config/test-send/pop-objs');

const bulkCreate = require('../bulk-create/user');

const helpers = {
	correctCookie: function(done) {

	},
	expiredCookie: function(done) {

	},
	isAuthFalseCookie: function(done) {

	},
	noCookie: function(done) {
		//set up the test db and give it a session that is isAuth false and one that isAuth true, plus a resetTokens file with one in it, a user file with one plain in it and one resetRequired in it
		return fs.writeFileAsync(__dirname + '/../../email-config/test-sent-from.txt', '', 'utf8')
		.then(function() {
			return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
		})
		.then(function(){
			models.sequelize.options.maxConcurrentQueries = 1;
			return models.sequelize.sync({
				force: true
			})
		})
		.then(function(){
			return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
		})
		.then(function() {
			return models.Users
			.bulkCreate(bulkCreate.users());
		})
		.then(function(users) {
			let existingSession = {
				sid: '-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk',
				data: '{"cookie":{"originalMaxAge":false,"expires":false,"secure":false,"httpOnly":true,"path":"/"},"isAuth":false}'
			}
			return models.UserSessions
			.create(existingSession);
		})
		.then(function(session) {
			return models.ResetTokens
			.bulkCreate(bulkCreate.resetTokens)
		})
		.then(function(tokens) {
			done();
		})
		.catch(function(error) {
			done(error);
		});
	}
}

module.exports = helpers;
