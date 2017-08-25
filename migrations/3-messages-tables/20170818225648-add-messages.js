'use strict';

const models = require('../models');
const moment = require('moment');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		console.log(moment(new Date(2017, 9, 17, 10, 0, 0)).toISOString());
		return models.SystemMessages
		.bulkCreate([{
			message: 'This is a test message number one to test the message system for hematogones',
			notes: 'test',
			expires: moment(new Date(2017, 8, 30, 10, 0, 0)).toISOString()
		}, {
			message: "Darth grievous c-3p0 darth moff twilek solo. Hoth leia coruscant anakin. Solo darth boba watto. Boba sidious mon thrawn wicket owen darth. Solo jar jade mace yoda sidious yoda cade. Padmé grievous amidala jade. Wicket aayla moff ackbar wampa cade antilles. Skywalker coruscant moff wampa. Alderaan mandalore luke jabba naboo zabrak jade antilles. Jabba ewok biggs calamari. Wampa vader dagobah obi-wan darth k-3po. Darth skywalker darth solo moff dagobah windu. Solo lars obi-wan kashyyyk palpatine wedge lando hoth ackbar. Skywalker sidious leia dantooine fisto ventress skywalker. Qui-gonn qui-gon tatooine twilek calamari hutt obi-wan darth dooku. Greedo kessel biggs darth hutt organa moff skywalker.",
			notes: 'test',
			expires: moment(new Date(2017, 9, 17, 10, 0, 0)).toISOString()
		}, {
			message: 'test3',
			expires: moment(new Date(2017, 12, 17, 10, 0, 0)).toISOString()
		}, {
			message: 'test4expired',
			expires: moment(new Date(2016, 12, 17, 10, 0, 0)).toISOString()
		}])
		.then((data) => {
			console.log(data);
		})
		.catch(error => console.log(error));
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
