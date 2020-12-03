'use strict';

const models = require('../models');

const Promise = require('bluebird');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.changeColumn('PlacRefs', 'createdAt', {
        allowNull: false,
        type: Sequelize.DATE
      })
  },
  down: (queryInterface, Sequelize) => {
    console.log('foo');
    // return queryInterface.removeColumn('PlacRefs', 'updatedAt');
  }
};