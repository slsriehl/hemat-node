'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

      return queryInterface.changeColumn('PlacRefs', 'maternalAge', {
          type: Sequelize.INTEGER(2),
          allowNull: true,
          validate: { min: 8, max: 60 }
      })
        .then(() => {
          return queryInterface.changeColumn('PlacRefs', 'weight', {
            type: Sequelize.INTEGER(4),
            validate: { min: 50, max: 2000 }
          })
        })
          .then(() => {
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
      return queryInterface.changeColumn('PlacRefs', 'maternalAge', {
          type: Sequelize.INTEGER(2),
          allowNull: true,
      })
          .then(() => {
              return queryInterface.changeColumn('PlacRefs', 'weight', {
                  type: Sequelize.INTEGER(4),
              })
          })
          .then(() => {
              return queryInterface.changeColumn('PlacRefs', 'gestage', {
                  type: Sequelize.INTEGER(2),
              })
          })
          .catch((err) => {
              console.log(err);
              return Promise.resolve(false);
          });
  }
};
