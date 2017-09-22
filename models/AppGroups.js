'use strict';
module.exports = function(sequelize, DataTypes) {
  var AppGroups = sequelize.define('AppGroups', {
    name: {
			type: DataTypes.STRING,
			len: 100
		},
    slug: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				AppGroups.hasMany(models.Apps, {
					foreignKey: 'appGroupId'
				});
      }
    }
  });
  return AppGroups;
};
