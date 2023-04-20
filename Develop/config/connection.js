require('dotenv').config();
//including const for bcrypt, for us mac users bcryptjs
const Sequelize = require('sequelize');
const Bcrypt = require('bcryptjs');

//initializing sequelize connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
