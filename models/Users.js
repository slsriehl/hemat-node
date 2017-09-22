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
				Users.hasMany(models.DismissedMessages, {
					foreignKey: 'userId'
				});
				Users.hasMany(models.ResetTokens, {
					foreignKey: 'userId'
				});
				Users.hasMany(models.CaseReferences, {
					foreignKey: 'userId'
				});
				Users.hasMany(models.Reports, {
					foreignKey: 'userId'
				});
				Users.hasMany(models.Snippets, {
					foreignKey: 'userId'
				});
				Users.hasMany(models.IhcPresets, {
					foreignKey: 'userId'
				});
        // associations can be defined here
      }
    }
  });
  return Users;
};
