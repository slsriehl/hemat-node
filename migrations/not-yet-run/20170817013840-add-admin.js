'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      make chandra an admin
    */
		return models.Users.update({
			'role': 'admin'
		}, {
			where: {
				id: 1
			}
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
  }
};
