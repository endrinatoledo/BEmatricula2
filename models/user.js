'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    usuName: DataTypes.STRING,
    usuLastName: DataTypes.STRING,
    usuEmail: DataTypes.STRING,
    usuPassword: DataTypes.STRING,
    usuStatus: DataTypes.INTEGER,
    rolId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};