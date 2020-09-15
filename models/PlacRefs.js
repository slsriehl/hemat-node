'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlacRefs = sequelize.define('PlacRefs', {
    placId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    gestage: {
      type: DataTypes.INTEGER(2)
    },
    weight: {
      type: DataTypes.INTEGER(4)
    },
    twin: {
      type: DataTypes.BOOLEAN
    },
    country: {
      type: DataTypes.TEXT('tiny')
    },
    state: {
      type: DataTypes.TEXT('tiny')
    },
    city: {
      type: DataTypes.TEXT('tiny')
    },
    sex: {
      type: DataTypes.ENUM('female', 'male', 'intersex', 'unknown'),
      allowNull: true
    },
    maternalAge: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    postFormalin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    abnormal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  PlacRefs.associate = function(models) {
    // associations can be defined here
    PlacRefs.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'SET NULL'
    });
  };
  return PlacRefs;
};