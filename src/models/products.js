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
            // Products.belongsTo(models.Categories, { foreignKey: 'Categoryid' });
            
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
        MotaHH: {
            type: DataTypes.STRING(50),
            allowNull: true // Change to false if description is required
        },
        Catogoriesid: {
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