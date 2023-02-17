'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drone extends Model {

    static associate(models) {
      Drone.hasMany(models.Accessory, {
        foreignKey: 'droneId',
        as: 'accessories'
      })
    }
  }
  Drone.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Drone',
  });
  return Drone;
};