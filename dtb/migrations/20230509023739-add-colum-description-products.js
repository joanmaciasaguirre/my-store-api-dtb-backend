'use strict';
const { ProductsSchema, PRODUCTS_TABLE } = require('../models/products.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.addColumn(PRODUCTS_TABLE, 'description', ProductsSchema.description);


  },

  async down (queryInterface) {

    await queryInterface.removeColumn(PRODUCTS_TABLE, 'description');



  }
};
