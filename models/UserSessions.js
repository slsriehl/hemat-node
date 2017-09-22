'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSessions = sequelize.define('UserSessions', {
    sid: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		userId: DataTypes.STRING,
		expires: DataTypes.DATE,
		data: DataTypes.TEXT
    //data: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserSessions;
};
