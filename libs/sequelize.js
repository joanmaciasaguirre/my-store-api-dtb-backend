const { Sequelize } = require('sequelize');

const { config } = require('../config/config');

const { setupModels } = require('../dtb/models');

const USER = encodeURIComponent(config.POSTGRES_USER);
const PASSWORD = encodeURIComponent(config.POSTGRES_PASSWORD);

 // si tenemis base de datos en la nube
// const URI = `postgres://${USER}:${PASSWORD}@${confi.POSTGRES_DB}:${PORT}/${DB_NAME}`;

const URI = `postgres://${USER}:${PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;


  const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true
  }
  );
  // corremos despues de la instancia de sequelize
  setupModels(sequelize);

  //no se aconseja usar sync en produccion solo en desarrollo
  // sequelize.sync();




  module.exports = sequelize;
