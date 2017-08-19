'use strict';
module.exports = function(sequelize, DataTypes) {
  var DismissedMessages = sequelize.define('DismissedMessages', {
		dismissedId: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				DismissedMessages.belongsTo(models.Users, {
					foreignKey: 'userId',
					// targetKey: 'id',
					onDelete: 'CASCADE'
				});
				DismissedMessages.belongsTo(models.SystemMessages, {
					foreignKey: 'messageId',
					// targetKey: 'id',
					onDelete: 'CASCADE'
				});
      }
    }
  });
  return DismissedMessages;
};
