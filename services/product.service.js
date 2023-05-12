const faker = require('faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where:{}
    };
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const { price } = query;
    if(price){
      options.where.price= price;
    }

    const { priceMin, priceMax } = query;
    if(priceMin && priceMax ){
      options.where.price= {
        [Op.gte]: priceMin,
        [Op.lte]: priceMax,
      };
    }
    
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const products = await models.Product.findByPk(id);
    if (!products) {
      throw boom.notFound('user not found');
    }
    return products;
  }

  async update(id, changes) {
    const products = await this.findOne(id);
    const rta = await products.update(changes);
    return rta;
  }

  async delete(id) {
    const products = await this.findOne(id);
    await products.destroy();
    return { id };
  }
}

module.exports = ProductsService;
