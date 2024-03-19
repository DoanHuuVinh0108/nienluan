'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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
    Userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Hoten: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true // Change to false if email is required
    },
    Matkhau: {
      type: DataTypes.STRING(50),
      allowNull: true // Change to false if description is required
    },
    Diachi: {
      type: DataTypes.STRING(50),
      allowNull: true // Change to false if address is required
    },
    Sodienthoai: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    Groupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'Groups',
      //   key: 'Groupid'
      // }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};