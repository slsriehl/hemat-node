'use strict';
module.exports = function(sequelize, DataTypes) {
  var ResetTokens = sequelize.define('ResetTokens', {
    code: {
			type: DataTypes.UUID,
			allowNull: false
		},
		used: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		valid: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
    expiresAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				ResetTokens.belongsTo(models.Users, {
					foreignKey: 'userId',
					// targetKey: 'id',
					onDelete: 'CASCADE'
				});
      }
    }
  });
  return ResetTokens;
};
