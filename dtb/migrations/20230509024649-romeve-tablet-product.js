'use strict';
const { ProductsSchema, PRODUCTS_TABLE } = require('../models/products.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
  }
};
