'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('ResetTokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.UUID
      },
			used: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			valid: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
      userId: {
        type: Sequelize.INTEGER,
				references: {
					model: 'Users',
					key: 'id'
				},
				onDelete: 'CASCADE',
				allowNull: false
      },
      expiresAt: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('ResetTokens');
  }
};
