'use strict';
module.exports = function(sequelize, DataTypes) {
  var Snippets = sequelize.define('Snippets', {
    spc_class: {
			type: DataTypes.STRING,
			allowNull: false
		},
    keywords: {
			type: DataTypes.STRING,
			allowNull: false
		},
    micros: {
			type: DataTypes.TEXT,
			allowNull: false
		},
    finals: {
			type: DataTypes.TEXT,
			allowNull: false
		},
    comments: {
			type: DataTypes.TEXT,
			allowNull: false
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
				Snippets.belongsTo(models.Users, {
					foreignKey: 'user_id',
					onDelete: 'CASCADE'
				});
      }
    }
  });
  return Snippets;
};
