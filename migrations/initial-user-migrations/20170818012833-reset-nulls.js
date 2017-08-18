'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return queryInterface.changeColumn('Users', 'createdAt', {
			type: Sequelize.DATE,
			allowNull: false
		})
		.then(
			queryInterface.changeColumn('Users', 'updatedAt', {
				type: Sequelize.DATE,
				allowNull: false
			})
		)
		.then(
			queryInterface.changeColumn('Users', 'mobile', {
				type: Sequelize.STRING,
				allowNull: true
			})
		)
		.then(
			queryInterface.changeColumn('Users', 'timestamp', {
				type: Sequelize.STRING,
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
		console.log('foo');
  }
};
