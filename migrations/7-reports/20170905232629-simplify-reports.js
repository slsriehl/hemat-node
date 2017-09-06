'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		queryInterface.removeColumn('Reports', 'comments');
		queryInterface.removeColumn('Reports', 'micro');
		queryInterface.removeColumn('Reports', 'finals');
		queryInterface.removeColumn('Reports', 'gross');
		queryInterface.removeColumn('Reports', 'cbcData');
		queryInterface.removeColumn('Reports', 'diff');
		queryInterface.removeColumn('Reports', 'diffPercent');
		queryInterface.removeColumn('Reports', 'serologic');
		queryInterface.removeColumn('Reports', 'ihcTable');
		queryInterface.dropTable('GuestReports');
		return;

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		queryInterface.addColumn('Reports', 'comments');
		queryInterface.addColumn('Reports', 'micro');
		queryInterface.addColumn('Reports', 'finals');
		queryInterface.addColumn('Reports', 'gross');
		queryInterface.addColumn('Reports', 'cbcData');
		queryInterface.addColumn('Reports', 'diff');
		queryInterface.addColumn('Reports', 'diffPercent');
		queryInterface.addColumn('Reports', 'serologic');
		queryInterface.addColumn('Reports', 'ihcTable');
		queryInterface.createTable('GuestReports');
		return;
  }
};
