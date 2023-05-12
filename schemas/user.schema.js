const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const rol = Joi.string().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  rol: rol.required()
});

const updateUserSchema = Joi.object({
  email: email,
  rol: rol,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
