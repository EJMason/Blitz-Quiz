const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

const Answer = sequelize.define('answer', {
  answerBody: Sequelize.STRING,
  isCorrect: Sequelize.STRING
});

module.exports = Answer;