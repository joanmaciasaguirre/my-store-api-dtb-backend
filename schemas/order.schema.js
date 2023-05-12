const Joi = require('joi');

const customerId = Joi.number().integer();
const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const AMOUNT = Joi.number().integer().min(1)


const getOrderSchema = Joi.object({
  id: id.required(),
});


const createOrderSchema = Joi.object({
  customerId: customerId.required(),

});

const updateOrderSchema = Joi.object({
  id: id.required(),
});


const deleteOrderSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  AMOUNT: AMOUNT.required(),



});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema, deleteOrderSchema,addItemSchema }
