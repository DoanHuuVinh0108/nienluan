
'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class GroupRoles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    GroupRoles.init({
        Groupid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'Groups',
                key: 'Groupid'
            }
        },
        Roleid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'Roles',
                key: 'Roleid'
            }
        }
    }, {
        sequelize,
        modelName: 'GroupRoles',
        freezeTableName: true
    });
    return GroupRoles;
};
