'use strict';
const models = require('../models');
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
			user_id: 1
		}, {
			where: {
				user_id: 57
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
  }
};
