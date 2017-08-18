'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		//set to add columns
		return queryInterface.addColumn('users', 'role', Sequelize.STRING)
		.then(
			queryInterface.addColumn('users', 'requireReset', {
				type: Sequelize.BOOLEAN,
				allowNull: false
			})
		)
		.then(
			queryInterface.addColumn('users', 'createdAt', {
				type: Sequelize.DATE,
				allowNull: true
			})
		)
		.then(
			queryInterface.addColumn('users', 'updatedAt', {
				type: Sequelize.DATE,
			})
		)
		.catch(error => console.log(error));
  },
  down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('users', 'role')
		.then(
			queryInterface.removeColumn('users', 'requireReset')
		)
		.then(
			queryInterface.removeColumn('users', 'createdAt')
		)
		.then(
			queryInterface.removeColumn('users', 'updatedAt')
		)
		.catch(error => console.log(error));
  }
};
