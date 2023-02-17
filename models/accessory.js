'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accessory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accessory.init({
    remote: DataTypes.ENUM,
    batteries: DataTypes.INTEGER,
    bag: DataTypes.BOOLEAN,
    droneId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accessory',
  });
  return Accessory;
};