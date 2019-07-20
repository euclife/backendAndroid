const Sequelize = require('sequelize');

const sequelize = new Sequelize('pmb_lpkia', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;