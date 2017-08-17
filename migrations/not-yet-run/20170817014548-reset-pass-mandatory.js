'use strict';

const models = require('./models/index');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      make it mandatory for everyone to reset their passwords
    */

		return models.Users.update({
			requireReset: true
		})
		.then(data => console.log(data))
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
