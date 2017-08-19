'use strict';

var models = require('../models');

module.exports = {
  up: function(queryInterface, Sequelize) {

		// return sequelize.query('CREATE TABLE IF NOT EXISTS DismissedMessages(dismissedId INTEGER NOT NULL auto_increment , messageId INTEGER NOT NULL, userId INTEGER NOT NULL, createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL, PRIMARY KEY (dismissedId), FOREIGN KEY (messageId) REFERENCES SystemMessages(id) ON DELETE CASCADE, FOREIGN KEY (userId) REFERENCES Users (id) ON DELETE CASCADE)');

		// return models.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
		// .then(() => {
		// 	models.sequelize.options.maxConcurrentQueries = 1;
		// 	return models.sequelize.sync()
		// })
		// .then(() => {
		// 	console.log('foo');

		return models.sequelize.query('ALTER TABLE Users ENGINE = InnoDB;')
		.then(() => {
			return queryInterface.createTable('DismissedMessages', {
	      dismissedId: {
	        allowNull: false,
	        autoIncrement: true,
	        primaryKey: true,
	        type: Sequelize.INTEGER
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
	      messageId: {
	        type: Sequelize.INTEGER,
					references: {
						model: 'SystemMessages',
						key: 'id'
					},
					onDelete: 'CASCADE',
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
		});

// 	console.log('bar');
// })
// .then(() => {
// 	sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
// });
  },
  down: function(queryInterface, Sequelize) {

    return queryInterface.dropTable('DismissedMessages')
		.then(() => {
			return models.sequelize.query('ALTER TABLE Users ENGINE = MyISAM;');
		});

  }
};
