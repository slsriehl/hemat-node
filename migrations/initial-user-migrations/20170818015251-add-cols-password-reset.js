'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return queryInterface.addColumn('Users', 'resetPasswordCode', {
			type: Sequelize.UUID,
			allowNull: true
		})
		.then(
			queryInterface.addColumn('Users', 'resetPasswordExpires', {
				type: Sequelize.DATE,
				allowNull: true
			})
		)
		.catch(error => console.log(error));

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		return queryInterface.removeColumn('Users', 'resetPasswordCode')
		.then(
			queryInterface.removeColumn('Users', 'resetPasswordExpires')
		)
		.catch(error => console.log(error));
  }
};
