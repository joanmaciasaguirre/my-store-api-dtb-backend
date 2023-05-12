const { Pool } = require('pg');

const { config } = require('../config/config');

const options = {};

if (config.isProd) {
  URI = config.dbUrl;

  options.connectionString = config.dbUr;
  options.ssl = {
    rejectUnauthorized: false,
  };
} else {
  const USER = encodeURIComponent(config.POSTGRES_USER);
  const PASSWORD = encodeURIComponent(config.POSTGRES_PASSWORD);

  // si tenemis base de datos en la nube
  // const URI = `postgres://${USER}:${PASSWORD}@${confi.POSTGRES_DB}:${PORT}/${DB_NAME}`;

  const URI = `postgres://${USER}:${PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;
  options.connectionString = URI;
}

const pool = new Pool(options);

module.exports = pool;
