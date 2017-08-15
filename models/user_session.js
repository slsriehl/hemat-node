'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_session = sequelize.define('user_session', {
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
  return user_session;
};
