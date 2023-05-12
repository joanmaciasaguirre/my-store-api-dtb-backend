'use strict';

const { ProductsSchema, PRODUCTS_TABLE } = require('../models/products.model');
const { CategoriesSchema, CATEGORIES_TABLE } = require('../models/categories.model');
const { OrdersSchema, ORDERS_TABLE } = require('../models/orders.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {
    await queryInterface.createTable(PRODUCTS_TABLE, ProductsSchema);
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
    await queryInterface.createTable(ORDERS_TABLE, OrdersSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
    await queryInterface.dropTable(ORDERS_TABLE);
  }
};
