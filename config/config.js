require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_PORT: process.env.POSTGRES_PORT,

  //PGADMIN
  PGADMIN_DEFAULT_EMAIL: process.env.PGADMIN_DEFAULT_EMAIL,
  PGADMIN_DEFAULT_PASSWORD: process.env.PGADMIN_DEFAULT_PASSWORD,



}

module.exports = { config }





