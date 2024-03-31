'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Groups extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Groups.belongsToMany(models.Roles, { through: models.GroupRoles, foreignKey: 'GroupId' })
            Groups.hasMany(models.Users, { foreignKey: 'GroupId' });
        }
    }
    Groups.init({
        Groupid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tennhom: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING(50),
            allowNull: true // Change to false if description is required
        }
    }, {
        sequelize,
        modelName: 'Groups',
        freezeTableName: true
    });
    return Groups;
};
