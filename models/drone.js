'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drone.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drone',
  });
  return Drone;
};