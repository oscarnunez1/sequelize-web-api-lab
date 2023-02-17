'use strict';
const {
  Model
} = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    static associate(models) {

      Accessory.belongsTo(models.Drone, {
        foreignKey: 'droneId'
      })

    }
  }
  Accessory.init({
    remote: {
      type: DataTypes.ENUM('RC-N1', 'RC', 'RC PRO',  'RC Controller Plus'),
      defaultValue: 'RC-N1'
    },
    batteries: DataTypes.INTEGER,
    droneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Drones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Accessory',
  });
  return Accessory;
};