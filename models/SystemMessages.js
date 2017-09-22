'use strict';
module.exports = function(sequelize, DataTypes) {
  var SystemMessages = sequelize.define('SystemMessages', {
    message: {
			type: DataTypes.TEXT,
			allowNull: false
		},
    notes: DataTypes.STRING,
    expires: {
			type: DataTypes.DATE,
			allowNull: false
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				SystemMessages.hasMany(models.DismissedMessages, {
					foreignKey: 'messageId'
				});
      }
    }
  });
  return SystemMessages;
};
