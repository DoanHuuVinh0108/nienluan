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
      Hoten: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING(50),
        allowNull: true, // Change to false if email is required
        primaryKey: true,
      },
      Matkhau: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      Diachi: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Sodienthoai: {
        type: Sequelize.STRING(50),
        allowNull: false,
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