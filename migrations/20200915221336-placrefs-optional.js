'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn('PlacRefs', 'sex', {
      type: Sequelize.ENUM('female', 'male', 'intersex', 'unknown'),
      allowNull: true
    })
    .then(() => {
      return queryInterface.addColumn('PlacRefs', 'maternalAge', {
        type: Sequelize.INTEGER(2),
        allowNull: true,
        validate: { min: 8, max: 60 }
      })
    })
    .then(() => {
      return queryInterface.addColumn('PlacRefs', 'postFormalin', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      })
    })
    .then(() => {
      return queryInterface.addColumn('PlacRefs', 'abnormal', {
        type: Sequelize.BOOLEAN,
        allowNull: true
      })
    })
    .then(() => {
      return queryInterface.addColumn('PlacRefs', 'userId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'SET NULL',
        allowNull: true
      })
    }).then(() => {
      return queryInterface.changeColumn('PlacRefs', 'weight', {
        type: Sequelize.INTEGER(4),
        validate: { min: 50, max: 2000 }
      })
        }).then(() => {
          return queryInterface.changeColumn('PlacRefs', 'gestage', {
            type: Sequelize.INTEGER(2),
            validate: { min: 19, max: 44 }
          })
        })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(false);
    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('PlacRefs', 'sex')
    .then(() => {
      return queryInterface.removeColumn('PlacRefs', 'maternalAge')
    })
    .then(() => {
      return queryInterface.removeColumn('PlacRefs', 'postFormalin')
    })
    .then(() => {
      return queryInterface.removeColumn('PlacRefs', 'abnormal')
    })
    .then(() => {
      return queryInterface.removeColumn('PlacRefs', 'userId')
    })
    .then(() => {
          return queryInterface.changeColumn('PlacRefs', 'weight', {
            type: DataTypes.INTEGER(4)
          })
        })
    .then(() => {
          return queryInterface.changeColumn('PlacRefs', 'gestage', {
            type: DataTypes.INTEGER(2)
          })
        })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(false);
    });
  }
};
