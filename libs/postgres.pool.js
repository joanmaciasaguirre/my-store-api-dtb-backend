const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.POSTGRES_USER);
const PASSWORD = encodeURIComponent(config.POSTGRES_PASSWORD);

 // si tenemis base de datos en la nube
// const URI = `postgres://${USER}:${PASSWORD}@${confi.POSTGRES_DB}:${PORT}/${DB_NAME}`;

const URI = `postgres://${USER}:${PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;


  const pool = new Pool({
    // host: 'localhost',
    // port: 5432,
    // user: 'postgres',
    // password: '123456',
    // database: 'postgres'
    connectionString: URI

  });






module.exports = pool;






