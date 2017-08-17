'use strict';

const moment = require('moment');

const models = require('../models/index');
// const database 		= require('../models').sequelize
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      edit timestamps
    */

		// return database.sync()
		// .then(
			models.Users.findAll({
				attributes: ['id', 'timestamp']
			})
		// )
		.then((data) => {
			console.log(data);
			var values = {};
			var horse = [];
			for(var i = 0; i < data.length; i++) {
				values = data[i].dataValues;
				console.log(values);
				horse.push(values);
			}

			for(var g = 0; g < horse.length; g++) {
				let unixTime = parseInt(horse[g].timestamp);
				let newDate = new Date(unixTime * 1000);
				newDate = moment(newDate).format('YYYY-MM-DD HH:mm:ss');
				horse[g].timestamp = newDate;
			}
			console.log(horse);
			for(var k = 0; k < horse.length; k++) {
				models.Users.update({
					createdAt: horse[k].timestamp,
					updatedAt: horse[k].timestamp
				}, {
					where: {
						id: horse[k].id
					}
				})
				.then(data => console.log(data));
			}
		})
		.catch(error => {
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
		return models.Users.findAll({
			attributes: ['id', 'timestamp']
		})
		.then(data => console.log(data))
		.catch(error => console.log(data));

  }
};
