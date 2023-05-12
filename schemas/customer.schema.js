const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string().min(3).max(30);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const rol = Joi.string().min(5)


const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
  password: password.required(),
  rol: rol.required()

  })


});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId

});

const getCustomerSchema = Joi.object({
  id: id.required(),

});

const deleteCustomerSchema = Joi.object({
  id: id.required(),

});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema, deleteCustomerSchema }














