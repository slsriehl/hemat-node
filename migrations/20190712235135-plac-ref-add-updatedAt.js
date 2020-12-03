'use strict';

const models = require('../models');

const Promise = require('bluebird');

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.createTable('PlacRef', {
    //   placId: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   gestage: {
    //     type: Sequelize.INTEGER(2)
    //   },
    //   weight: {
    //     type: Sequelize.INTEGER(4)
    //   },
    //   twin: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   country: {
    //     type: Sequelize.TEXT(tiny)
    //   },
    //   state: {
    //     type: Sequelize.TEXT(tiny)
    //   },
    //   city: {
    //     type: Sequelize.TEXT(tiny)
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    let prev = [];
    return models.PlacRefs.findAll({attributes: ['placId', 'createdAt']})
    .then((result) => {
      prev = result;
      console.log('result run');
      return queryInterface.addColumn('PlacRefs', 'updatedAt', {
        allowNull: true,
        type: Sequelize.DATE
      })
    })
    .then(data => {
      console.log('column added');
      let updates = Promise.map(prev, (r) => {
        console.log(r.dataValues);

        return models.PlacRefs.update({
          updatedAt: r.dataValues.createdAt
        }, {
          where: {
            placId: r.dataValues.placId
          }
        })
      });
      console.log('mapped');
      return Promise.all(updates);
    })
    .then(data => {
      console.log('inserted');
      return queryInterface.changeColumn('PlacRefs', 'updatedAt', {
        allowNull: false,
        type: Sequelize.DATE
      })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('PlacRefs', 'updatedAt');
  }
};