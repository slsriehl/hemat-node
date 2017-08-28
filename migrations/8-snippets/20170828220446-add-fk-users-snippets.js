'use strict';
const moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      *** delete row 676 before running migration ***
    */

		return queryInterface.changeColumn('Snippets', 'user_id', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Users',
				key: 'id'
			},
			allowNull: false
		})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		return queryInterface.changeColumn('Snippets', 'user_id', {
			type: Sequelize.INTEGER,
			allowNull: false
		});
  }
};
