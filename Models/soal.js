const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Soal extends Sequelize.Model {}

Soal.init({
  deskripsi: Sequelize.STRING
}, { sequelize, modelName: 'soal' });

module.exports = Soal;