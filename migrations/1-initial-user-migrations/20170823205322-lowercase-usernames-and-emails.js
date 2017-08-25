'use strict';
const moment = require('moment');
const models = require('../models/index');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return models.Users.findAll({
			attributes: ['id', 'username', 'email'],
			where: {
				id: {
					$lt: 50
				}
			}
		})
		.then((data) => {
			var horse = [];
			for(var i = 0; i < data.length; i++) {
				console.log(data[i].dataValues);
				horse.push(data[i].dataValues);
			}
			return horse;
		})
		.then((horse) => {
			var modHorse = [];
			for(var g = 0; g < horse.length; g++) {
				modHorse.push({
					id: horse[g].id,
					username: horse[g].username.toLowerCase(),
					email: horse[g].email.toLowerCase()
				});
				// return models.sequelize.query['UPDATE Users SET username = ' + modHorse[g].username + ' WHERE id = ' + modHorse[g].id + ' AND updatedAt < ' + lastUpdateTime]
				models.Users
				.update({
					username: modHorse[g].username,
					email: modHorse[g].email
				}, {
					where: {
						id: modHorse[g].id
					}
				})
				.then((data) => console.log(data));
			}
		})
		.catch((error) =>{
			console.log(error);
		});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		console.log('foo');
		return models.Users.findAll({
			attributes: ['id', 'username', 'email'],
			where:{
				id: {
					$gte: 50
				}
			}
		})
		.then((data) => {
			var horse = [];
			for(var i = 0; i < data.length; i++) {
				console.log(data[i].dataValues);
				horse.push(data[i].dataValues);
			}
			return horse;
		})
		.then((horse) => {
			var modHorse = [];
			for(var g = 0; g < horse.length; g++) {
				modHorse.push({
					id: horse[g].id,
					username: horse[g].username.toLowerCase(),
					email: horse[g].email.toLowerCase()
				});
				// return models.sequelize.query['UPDATE Users SET username = ' + modHorse[g].username + ' WHERE id = ' + modHorse[g].id + ' AND updatedAt < ' + lastUpdateTime]
				models.Users
				.update({
					username: modHorse[g].username,
					email: modHorse[g].email
				}, {
					where: {
						id: modHorse[g].id
					}
				})
				.then((data) => console.log(data));
			}
		})
		.catch((error) =>{
			console.log(error);
		});
  }
};
