'use strict';

const models = require('../models');
const moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return models.Snippets
		.update({
			createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
		}, {
			where: {
				entry_id: {
					$lt: 1000
				}
			}
		})
		.then((data) => {
			console.log(data)
		})
		.catch(error => console.log(error));
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		return models.Snippets
		.update({
			createdAt: null
		}, {
			where: {
				entry_id: {
					$lt: 1000
				}
			}
		})
		.then((data) => {
			console.log(data)
		})
		.catch(error => console.log(error));
  }
};
