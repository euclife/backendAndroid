const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
  nama: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  no_telp: Sequelize.STRING,
  role: Sequelize.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;