'use strict';

const moment = require('moment');

const models = require('../models/index');
// const database 		= require('../models').sequelize


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      edit timestamps
    */



		return models.Users.findAll({
			attributes: ['id', 'timestamp'],
			where: {
				'createdAt': null
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
			for(var g = 0; g < horse.length; g++) {
				let unixTime = parseInt(horse[g].timestamp);
				let newDate = new Date(unixTime * 1000);
				newDate = moment(newDate).format('YYYY-MM-DD HH:mm:ss');
				horse[g].timestamp = newDate;
			}
			return horse;
		})
		.then((horse) => {
			console.log(horse);
			const loopCall = (k) => {
				return models.Users.update({
					createdAt: horse[k].timestamp
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
		.then((data) => console.log(data))
		.catch((error) =>{
			console.log(error);
		});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		return console.log('foo');
		// return models.Users.findAll({
		// 	attributes: ['id', 'createdAt']
		// })
		// .then((data) => {
		// 	var horse = [];
		// 	for(var i = 0; i < data.length; i++) {
		// 		console.log(data[i].dataValues);
		// 		horse.push(data[i].dataValues);
		// 	}
		// 	return horse;
		// })
		// .then((horse) => {
		// 	console.log(horse);
		// 	const loopCall = (k) => {
		// 		return models.Users.update({
		// 			createdAt: null
		// 		}, {
		// 			where: {
		// 				id: horse[k].id
		// 			}
		// 		})
		// 		.then((data) => {
		// 			console.log(`transaction record ${horse[k].id}: ${data}`);
		// 			if(k == (horse.length - 1)) {
		// 				console.log('bar');
		// 				return;
		// 			}
		// 		});
		// 	}
		// 	const loop = (loopMe) => {
		// 		for(var k = 0; k < horse.length; k++) {
		// 			loopMe(k);
		// 		}
		// 	}
		// 	loop(loopCall);
		// })
		// .then((data) => {
		// 	setTimeout(() => {console.log('foo');}, 20000);
		// })
		// .catch((error) =>{
		// 	console.log(error);
		// });
  }
};
