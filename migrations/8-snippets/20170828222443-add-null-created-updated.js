'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		queryInterface.addColumn('Snippets', 'createdAt', {
			type: Sequelize.DATE,
			allowNull: true
		});

		queryInterface.addColumn('Snippets', 'updatedAt', {
			type: Sequelize.DATE,
			allowNull: true
		});

		return;

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		queryInterface.removeColumn('Snippets', 'createdAt');
		queryInterface.removeColumn('Snippets', 'updatedAt');
		return;
  }
};
