const Sequelize = require('sequelize');

const db = new Sequelize('uptask', 'postgres', 'dbadmin', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
});

module.exports = db;