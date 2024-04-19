'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Images extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Images.belongsTo(models.Products, { foreignKey: 'Productid' })
        
        }
    }
    Images.init({
        Imageid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Url: {
            type: DataTypes.STRING(225),
            allowNull: false
        },
        Productid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Public_id: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Images',
        freezeTableName: true
    });
    return Images;
};