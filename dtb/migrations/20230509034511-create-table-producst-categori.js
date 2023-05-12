const { ProductSchema, PRODUCTS_TABLE } = require('../models/products.model');
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);



  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);


  }
};
