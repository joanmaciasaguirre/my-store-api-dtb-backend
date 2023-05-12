const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {

    const rta = await models.Category.findAll();
    return rta;

  }

  async findOne(id) {
    const categories = await models.Category.findByPk(id,{
      include: ['products']
    });
    if (!categories) {
      throw boom.notFound('product not found');
    }
    return categories;
  }

  async update(id, changes) {
    const categories = await this.findOne(id);
    const rta = await categories.update(changes);
    return rta;
  }

  async delete(id) {

    const categories = await this.findOne(id);
    await categories.destroy();
    return { id };
  }

}

module.exports = CategoryService;
