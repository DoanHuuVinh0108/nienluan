
'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Orders.belongsTo(models.Users, {foreignKey:'Userid'})
            Orders.hasMany(models.Detailorders, {foreignKey:'Orderid'})
        }
    }
    Orders.init({
        Orderid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'Users',
            //     key: 'Userid'
            // }
        },
        Sodonhang: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Trangthai: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Ngaydathang: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Orders',
        freezeTableName: true
    });
    return Orders;
};
