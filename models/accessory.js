'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    static associate(models) {
      // define association here
    }
  }
  Accessory.init({
    remote: {
      type: DataTypes.ENUM('RC', 'RC PRO', 'RC-N1', 'RC Controller Plus')
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