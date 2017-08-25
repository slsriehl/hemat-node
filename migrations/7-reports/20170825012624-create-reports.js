'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Reports', {
      id: {
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
				}
			},
			referenceId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'CaseReferences',
					key: 'id'
				}
			},
			appId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Apps',
					key: 'id'
				}
			},
			pdfName: {
				type: Sequelize.STRING
			},
      singleSection: {
        type: Sequelize.TEXT
      },
      comments: {
        type: Sequelize.TEXT
      },
      micro: {
        type: Sequelize.TEXT
      },
      finals: {
        type: Sequelize.TEXT
      },
      gross: {
        type: Sequelize.TEXT
      },
      cbcData: {
        type: Sequelize.TEXT
      },
      diff: {
        type: Sequelize.TEXT
      },
      diffPercent: {
        type: Sequelize.TEXT
      },
      serologic: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Reports');
  }
};
