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