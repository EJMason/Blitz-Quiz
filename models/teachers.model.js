const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Teacher = sequelize.define('teacher', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  photo: Sequelize.STRING
});

module.exports = Teacher;