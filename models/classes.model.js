const Sequelize = require('sequelize');
const sequelize = require('./../db/connection');

var Class = sequelize.define('class', {
  className: Sequelize.STRING
});

module.exports = Class;