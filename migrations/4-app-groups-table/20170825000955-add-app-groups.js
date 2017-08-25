'use strict';

var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      add entries to AppGroups table
    */

		return models.AppGroups
		.bulkCreate([{
			name: 'Autopsy Tools',
			slug: 'autopsy'
		}, {
			name: 'Clinical Pathology Tools',
			slug: 'clin-path'
		}, {
			name: 'Hemepath Tools',
			slug: 'heme-path'
		}, {
			name: 'Surgical Pathology Tools',
			slug: 'surg-path'
		}, {
			name: 'GI Tools',
			slug: 'gi-path'
		}, {
			name: 'CAP Cancer Checklists',
			slug: 'cap'
		}])
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
  },

  down: function (queryInterface, Sequelize) {
    /*
      remove all entries from AppGroups table
    */
		return models.AppGroups
		.destroy({}, {truncate: true})
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
  }
};
