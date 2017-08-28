'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {

		queryInterface.renameTable('reporting', 'Snippets');



  },
  down: function(queryInterface, Sequelize) {

		queryInterface.renameTable('Snippets', 'reporting');

  }
};
