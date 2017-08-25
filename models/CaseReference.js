'use strict';
module.exports = function(sequelize, DataTypes) {
  var CaseReference = sequelize.define('CaseReference', {
    reference: {
			type: DataTypes.STRING,
			len: 25
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				CaseReference.belongsTo(models.Users, {
					foreignKey: 'userId',
					onDelete: 'CASCADE'
				});
      }
    }
  });
  return CaseReference;
};
