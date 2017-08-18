'use strict';

const models = require('../models/index');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      make it mandatory for everyone to reset their passwords
    */

		return models.Users.findAll({
			attributes: ['id'],
			where: {
				requireReset: false
			}
		})
		.then((data) => {
			var horse = [];
			for(var i = 0; i < data.length; i++) {
				console.log(data[i].dataValues);
				horse.push(data[i].dataValues);
			}
			return horse;
		})
		.then((horse) => {
			console.log(horse);
			const loopCall = (k) => {
				return models.Users.update({
					requireReset: true
				}, {
					where: {
						id: horse[k].id
					}
				})
				.then((data) => {
					console.log(`transaction record ${horse[k].id}: ${data}`);
					if(k == (horse.length - 1)) {
						console.log('bar');
						return;
					}
				});
			}
			const loop = (loopMe) => {
				for(var k = 0; k < horse.length; k++) {
					loopMe(k);
				}
			}
			loop(loopCall);
		})
		.then(data => console.log(data))
		.catch(error => console.log(error));

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		return console.log('foo');
  }
};
