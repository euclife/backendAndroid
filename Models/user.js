const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class User extends Sequelize.Model {}

User.init({
  nama: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  role: Sequelize.STRING,
  token: Sequelize.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;