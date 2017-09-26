
const models = require('../../models');

const bcrypt = require('bcryptjs');

const bulkCreate = require('./bulk-create');

const helpers = {
	expiredCookie: function(done) {
		//set up the test db and give it a session id that does not match the cookie sent in the test header
		return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
		.then(function(){
			models.sequelize.options.maxConcurrentQueries = 1;
			return models.sequelize.sync({ force: true })
		})
		.then(function(){
			return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
		})
		.then(function() {
			const salt = bcrypt.genSaltSync(10);
			const password = bcrypt.hashSync('spaz5713', salt);
			let newUser = {
				firstname: 'Louise',
				lastname: 'Bates',
				username: 'louise',
				email: 'louise@example.com',
				password: password,
				requireReset: false
			}
			return models.Users
			.create(newUser);
		})
		.then(function(user) {
			let existingSession = {
	      sid: 'mgLYzy-2FWEtzdcv0yw1PXNrNzcb-pYy',
	      data: '{"cookie":{"originalMaxAge":false,"expires":false,"secure":false,"httpOnly":true,"path":"/"},"isAuth":true,"user":' + user.dataValues.userId + ',"message":null,"messageType":null,"firstname":"' + user.dataValues.firstname + '","systemMessages":null}'
	    }
			return models.UserSessions
			.create(existingSession);
		})
		.then(function() {
			return models.AppGroups
			.bulkCreate(bulkCreate.appGroups)
		})
		.then(function(data) {
			return models.Apps
			.bulkCreate(bulkCreate.apps)
		})
		.then(function(data) {
			done();
		})
		.catch(function(error) {
			console.log('table sync error');
			throw error;
			done();
		});
	},
	correctCookie: function(done) {
		//set up the test db and give it a session id that matches the cookie sent in the test header
		return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
		.then(function(){
			models.sequelize.options.maxConcurrentQueries = 1;
			return models.sequelize.sync({ force: true })
		})
		.then(function(){
			return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
		})
		.then(function() {
			const salt = bcrypt.genSaltSync(10);
			const password = bcrypt.hashSync('spaz5713', salt);
			let newUser = {
				firstname: 'Louise',
				lastname: 'Bates',
				username: 'louise',
				email: 'louise@example.com',
				password: password,
				requireReset: false
			}
			return models.Users
			.create(newUser);
		})
		.then(function(user) {
			let existingSession = {
				sid: '-UQEXCuRToxObWKYDYwJ4j5-0fEpWphk',
				data: '{"cookie":{"originalMaxAge":false,"expires":false,"secure":false,"httpOnly":true,"path":"/"},"isAuth":true,"user":' + user.dataValues.id + ',"message":null,"messageType":null,"firstname":"' + user.dataValues.firstname + '","systemMessages":null}'
			}
			return models.UserSessions
			.create(existingSession);
		})
		.then(function() {
			return models.AppGroups
			.bulkCreate(bulkCreate.appGroups)
		})
		.then(function(data) {
			return models.Apps
			.bulkCreate(bulkCreate.apps)
		})
		.then(function(data) {
			done();
		})
		.catch(function(error) {
			console.log('table sync error');
			throw error;
			done();
		});
	}
}

module.exports = helpers;
