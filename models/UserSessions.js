'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSessions = sequelize.define('UserSessions', {
    sid: {
			type: DataTypes.STRING,
			primaryKey: true
		},
    data: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserSessions;
};
