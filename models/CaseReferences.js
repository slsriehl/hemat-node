'use strict';
module.exports = function(sequelize, DataTypes) {
  var CaseReferences = sequelize.define('CaseReferences', {
    reference: {
			type: DataTypes.STRING,
			len: 25
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				CaseReferences.belongsTo(models.Users, {
					foreignKey: 'userId',
					onDelete: 'CASCADE'
				});
				CaseReferences.hasMany(models.Reports);
      }
    }
  });
  return CaseReferences;
};
