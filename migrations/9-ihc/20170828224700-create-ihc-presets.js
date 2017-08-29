'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('IhcPresets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interp: {
        type: Sequelize.TEXT,
				allowNull: false
      },
      name: {
        type: Sequelize.STRING,
				allowNull: false
      },
			userID: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
				allowNull: false
			},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('IhcPresets');
  }
};
