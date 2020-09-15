'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn('Users', 'trusted', {
      type: Sequelize.BOOLEAN,
			defaultValue: false,
			allowNull: true,
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
    return queryInterface.removeColumn('Users', 'trusted')
    .catch((err) => {
      console.log(err);
      return Promise.resolve(false);
    });
  }
};
