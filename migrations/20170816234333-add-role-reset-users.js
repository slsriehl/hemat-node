'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
		//set to add columns
				queryInterface.addColumn('users', 'role', Sequelize.STRING);
		queryInterface.addColumn('users', 'requireReset', {
					type: Sequelize.BOOLEAN,
					allowNull: false
			});


  },
  down: function(queryInterface, Sequelize) {
		return queryInterface.removeColumn('users', 'role')
			.then(
				queryInterface.removeColumn('users', 'requireReset'))
			.catch(error => console.log(error));
  }
};
