const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Jawaban extends Sequelize.Model {}

Jawaban.init({
  id_soal: Sequelize.INTEGER,
  deskripsi: Sequelize.STRING,
  cek: Sequelize.STRING
}, { sequelize, modelName: 'jawaban' });

module.exports = Jawaban;