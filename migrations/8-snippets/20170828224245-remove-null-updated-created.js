'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		queryInterface.changeColumn('Snippets', 'createdAt', {
			type: Sequelize.DATE,
			allowNull: false
		});

		queryInterface.changeColumn('Snippets', 'updatedAt', {
			type: Sequelize.DATE,
			allowNull: false
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

		queryInterface.changeColumn('Snippets', 'createdAt', {
			type: Sequelize.DATE,
			allowNull: true
		});

		queryInterface.changeColumn('Snippets', 'updatedAt', {
			type: Sequelize.DATE,
			allowNull: true
		});

		return;
  }
};
