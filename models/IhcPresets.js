'use strict';
module.exports = function(sequelize, DataTypes) {
  var IhcPresets = sequelize.define('IhcPresets', {
    interp: {
			type: DataTypes.TEXT,
			allowNull: false
		},
    	name: {
				type: DataTypes.STRING,
				allowNull: false
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				IhcPresets.belongsTo(models.Users, {
					foreignKey: 'userId',
					onDelete: 'CASCADE'
				});
      }
    }
  });
  return IhcPresets;
};
