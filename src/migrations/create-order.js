'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      Orderid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Userid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: { model: 'Users', key: 'Userid' }
      },
      Sodonhang: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      TrangThai: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Ngaydathang: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('Orders');
  }
};