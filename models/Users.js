'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: {
			type: DataTypes.STRING,
			allowNull: false
		},
    email: {
			type: DataTypes.STRING,
			allowNull: false
		},
    mobile: {
			type: DataTypes.STRING,
			allowNull: true
		},
    firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
    lastname: {
			type: DataTypes.STRING,
			allowNull: false
		},
    password: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		timestamp: {
			type: DataTypes.STRING,
			allowNull: true
		},
    role: DataTypes.STRING,
		requireReset: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null
		}
  }, {
    classMethods: {
      associate: function(models) {
				Users.hasMany(models.DismissedMessages);
				Users.hasMany(models.ResetTokens);
				Users.hasMany(models.CaseReferences);
				Users.hasMany(models.Reports);
				Users.hasMany(models.Snippets);
				Users.hasMany(models.IhcPresets);
        // associations can be defined here
      }
    }
  });
  return Users;
};
