// se encargara enviar las conexiones  hacia los modelos

//
const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./products.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./orders.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { OrderProducts, OrderProductSchema } = require('./order-product.model');



function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  OrderProducts.init(OrderProductSchema, OrderProducts.config(sequelize));

  //ejecutar las asocianes
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderProducts.associate(sequelize.models);
}

module.exports = { setupModels }















