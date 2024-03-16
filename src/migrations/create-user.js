'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      Userid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Matkhau: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Diachi: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Sodienthoai: {
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true
      },
      Groupid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Groups',
        //   key: 'Groupid'
        // } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};