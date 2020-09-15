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
        allowNull: true
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
    .catch((err) => {
      console.log(err);
      return Promise.resolve(false);
    });
  }
};
