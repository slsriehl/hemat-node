'use strict';
module.exports = function(sequelize, DataTypes) {
  var IhcPresets = sequelize.define('IhcPresets', {
    opt: DataTypes.STRING,
    interp: DataTypes.TEXT,
    name: DataTypes.STRING
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
