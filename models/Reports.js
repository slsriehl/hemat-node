'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reports = sequelize.define('Reports', {
    singleSection: DataTypes.TEXT,
    comments: DataTypes.TEXT,
    micro: DataTypes.TEXT,
    finals: DataTypes.TEXT,
    gross: DataTypes.TEXT,
    cbcData: DataTypes.TEXT,
    diff: DataTypes.TEXT,
    diffPercent: DataTypes.TEXT,
    serologic: DataTypes.TEXT,
		pdfName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				Reports.belongsTo(models.Users, {
					foreignKey: 'userId',
					onDelete: 'CASCADE'
				});
				Reports.belongsTo(models.CaseReferences, {
					foreignKey: 'referenceId',
					onDelete: 'SET NULL'
				});
				Reports.belongsTo(models.Apps, {
					foreignKey: 'appId',
					onDelete: 'SET NULL'
				});
      }
    }
  });
  return Reports;
};
