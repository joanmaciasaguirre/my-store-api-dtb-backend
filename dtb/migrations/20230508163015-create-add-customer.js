'use strict';
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
     /**
    await queryInterface.addColumn(CUSTOMER_TABLE, 'lastName', CustomerSchema.lastName);
    await queryInterface.addColumn(CUSTOMER_TABLE, 'phone', CustomerSchema.phone);
*/
  },

  async down (queryInterface) {
     /**
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'lastName');
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'phone');
    */
  }
};
