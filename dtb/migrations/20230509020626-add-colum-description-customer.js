'use strict';
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    //await queryInterface.addColumn(CUSTOMER_TABLE, 'description', CustomerSchema.description);


  },

  async down (queryInterface) {

    await queryInterface.dropTable(CUSTOMER_TABLE);
    


  }
};
