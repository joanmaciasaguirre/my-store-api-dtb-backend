const { Model , DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./orders.model')
const { PRODUCT_TABLE } = require('./products.model')


const ORDER_PRODUCT_TABLE = 'orders_products';

//CUAL SERIA EL ESQUEMA DE LA TABLA

const  OrderProductSchema = {
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  createdAt : {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.NOW
  },
  AMOUNT:{
    allowNull: false,
    type: DataTypes.INTEGER,


  },


  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  }
}

class OrderProducts extends Model {
//crear metodos estaticos
  //no necesita declarar el objeto

  static associate(models){
    //asociate

  }

  //configuracion de la tabla
  static config(sequelize){
    return {
        sequelize,
        tableName: ORDER_PRODUCT_TABLE,
        //nombre del modelo
        modelName: 'OrderProducts',
        timestamps: false

  }
}

}

module.exports = { OrderProductSchema, ORDER_PRODUCT_TABLE, OrderProducts }












