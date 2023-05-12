//aqui empezamos colocar tambien los archivos de conexion a la base de datos
const { config } = require('../config/config');




const USER = encodeURIComponent(config.POSTGRES_USER);
const PASSWORD = encodeURIComponent(config.POSTGRES_PASSWORD);

 // si tenemis base de datos en la nube
// const URI = `postgres://${USER}:${PASSWORD}@${confi.POSTGRES_DB}:${PORT}/${DB_NAME}`;

const URI = `postgres://${USER}:${PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;


module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
    
  }

}
