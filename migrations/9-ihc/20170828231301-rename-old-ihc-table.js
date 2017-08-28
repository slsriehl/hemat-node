'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*

    */

		return queryInterface.renameTable('ihc_preset', 'ihc_preset_old');
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		return queryInterface.renameTable('ihc_preset_old', 'ihc_preset');
  }
};
