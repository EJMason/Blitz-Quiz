const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Student = sequelize.define('student', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  photo: Sequelize.STRING
});

module.exports = Student;