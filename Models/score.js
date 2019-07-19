const Sequelize = require('sequelize');

const sequelize = require('../Configs/sequelize');

class Score extends Sequelize.Model {}

Score.init({
  userId: Sequelize.INTEGER,
  jwb_benar: Sequelize.INTEGER,
  jwb_salah: Sequelize.INTEGER,
  score: Sequelize.INTEGER
}, { sequelize, modelName: 'score' });

module.exports = Score;