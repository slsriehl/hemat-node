'use strict';

const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return models.IhcPresets
		.bulkCreate([{
			interp: 'The immunohistochemistry pattern shows CD30+ large abnormal B-cells, in keeping with classical Hodgkin lymphoma.',
			name: 'classical Hodgkin lymphoma',
			userId: 1
		}, {
			interp: 'The immunohistochemistry pattern shows a population of CD1a and S100 positive atypical histiocytes, as would be expected for Langerhans cell histiocytosis. BRAF V600E expression may be associated with asynchronous lesions or aggressive behavior. ',
			name: 'LCH',
			userId: 1
		}, {
			interp: 'The immunohistochemistry pattern provides no evidence of a neoplastic process.',
			name: 'No neoplasm',
			userId: 1
		}, {
			interp: 'The immunohistochemistry pattern is in keeping with low-grade follicular lymphoma with a mixed follicular and diffuse pattern. There is no evidence of diffuse large B-cell lymphoma.',
			name: 'follicular lymphoma',
			userId: 1
		}])
		.then((data) => {
			console.log(data);
		})
		.then(error => console.log(error));
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
