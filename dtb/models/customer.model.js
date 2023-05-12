const { Model , DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')


const CUSTOMER_TABLE = 'customer';


//CUAL SERIA EL ESQUEMA DE LA TABLA

const  CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt : {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: USER_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'

    }
}

class Customer extends Model {
 //crear metodos estaticos
    //no necesita declarar el objeto

    static associate(models){
      //asociate
      this.belongsTo(models.User, {as: 'user'})
      this.hasMany(models.Order,{
        as: 'orders',
        foreignKey: 'customerId'
      })
    }

    //configuracion de la tabla
    static config(sequelize){
      return {
          sequelize,
          tableName: CUSTOMER_TABLE,
          //nombre del modelo
          modelName: 'Customer',
          timestamps: false

    }
}

}

module.exports = { CustomerSchema, CUSTOMER_TABLE, Customer }




























