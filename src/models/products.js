'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Products.belongsTo(models.Categories, { foreignKey: 'Categoryid' });
            Products.hasMany(models.Detailorders, { foreignKey: 'Productid' });
            Products.hasMany(models.Images, { foreignKey: 'Productid' });
        }
    }
    Products.init({
        Productid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tensanpham: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Giasanpham: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Soluong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Mota: {
            type: DataTypes.STRING(65000),
            allowNull: true // Change to false if description is required
        },
        Manhinh:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Hedieuhanh:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Cameratruoc:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Camerasau:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Chip:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Ram:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Dungluongluutru:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Sim:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Pinvasac:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Categoryid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Products',
        freezeTableName: true
    });
    return Products;
};