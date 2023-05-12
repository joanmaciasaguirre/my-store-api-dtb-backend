const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const { setupModels } = require('../dtb/models');


const options = {
  dialect: 'postgres',
  logging: config.isProd ? false: true,
}

if(config.isProd){
  options.dialectOptions={
    ssl:{
      rejectUnauthorized: false
    }
  }

}

  const sequelize = new Sequelize(config.dbUrl, options  );
  // corremos despues de la instancia de sequelize
  setupModels(sequelize);

  //no se aconseja usar sync en produccion solo en desarrollo
  // sequelize.sync();




  module.exports = sequelize;
