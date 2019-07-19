const Sequelize = require('sequelize');

const sequelize = new Sequelize('pmb_lpkia', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;