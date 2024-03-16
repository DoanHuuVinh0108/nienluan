
'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class Roles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Roles.belongsToMany(models.Roles, { through: 'GroupRoles', foreignKey: 'RoleId' });

        }
    }
    Roles.init({
        Roleid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Url: {
            type: DataTypes.STRING(50),
            allowNull: false // Change to false if description is required
        },
        Description: {
            type: DataTypes.STRING(50),
            allowNull: true // Change to false if URL is required
        }
    }, {
        sequelize,
        modelName: 'Roles',
        freezeTableName: true
    });
    return Roles;
};
