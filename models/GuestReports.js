'use strict';
module.exports = function(sequelize, DataTypes) {
  var GuestReports = sequelize.define('GuestReports', {
    pdfName: {
			type: DataTypes.STRING,
			allowNull: false
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GuestReports;
};
