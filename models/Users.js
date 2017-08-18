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
			type: DataTypes.STRING,
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
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
