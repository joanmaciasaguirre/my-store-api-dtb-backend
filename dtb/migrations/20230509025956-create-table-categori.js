'use strict';
const { CategoriesSchema, CATEGORIES_TABLE } = require('../models/categories.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORIES_TABLE, CategoriesSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
