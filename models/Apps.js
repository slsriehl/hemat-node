'use strict';
module.exports = function(sequelize, DataTypes) {
  var Apps = sequelize.define('Apps', {
    name: {
			type: DataTypes.STRING,
			len: 100
		},
    slug: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				Apps.belongsTo(models.AppGroups, {
					foreignKey: 'appGroupId',
					onDelete: 'SET NULL'
				});
				Apps.hasMany(models.Reports, {
					foreignKey: 'reportId'
				});
      }
    }
  });
  return Apps;
};
