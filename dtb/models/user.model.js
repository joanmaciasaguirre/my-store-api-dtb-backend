const { Model , DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

//CUAL SERIA EL ESQUEMA DE LA TABLA

const  UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    rol: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'costumer'
    },

    createdAt : {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
}

class User extends Model {
    //crear metodos estaticos
    //no necesita declarar el objeto

    static associate(models){
      //associate
      this.hasOne(models.Customer,{
        //aslias
        as:'customer',
        foreignKey: 'userId'
      });


    }
    //configuracion de la tabla
    static config(sequelize){
      return {
          sequelize,
          tableName: USER_TABLE,
          //nombre del modelo
          modelName: 'User',
          timestamps: false

    }
}

}

module.exports = { UserSchema, USER_TABLE, User }





















