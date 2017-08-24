'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
			add deletedAt
    */
		return queryInterface.addColumn('Users', 'deletedAt', {
			type: Sequelize.DATE,
			allowNull: true,
			defaultValue: null
		})
		.catch(error => console.log(error));
  },

  down: function (queryInterface, Sequelize) {
    /*
		remove deletedAt
    */

		return queryInterface.removeColumn('Users', 'deletedAt')
		.catch(error => console.log(error));
  }
};
