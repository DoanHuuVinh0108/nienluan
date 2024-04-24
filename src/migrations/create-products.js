'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      Productid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Tensanpham: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Giasanpham: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Soluong: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Mota: {
        type: Sequelize.STRING(65000),
        allowNull: true
      },
      Manhinh: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Hedieuhanh: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Cameratruoc: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Camerasau: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Chip: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Ram: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Dungluongluutru: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Sim: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Pinvasac: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      Categoryid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Categories', key: 'Categoryid' }
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
    await queryInterface.dropTable('Products');
  }
};