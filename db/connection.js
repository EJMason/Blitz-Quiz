const Sequelize = require('sequelize');
const keys = require('./../keys.js');

const connection = 'blitz-quiz.cxcxj7rsgusu.us-west-2.rds.amazonaws.com:3306';
const sequelize = new Sequelize(keys.DB_CONNSTR, {
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
      ssl: {
         require: true
      }
   }
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;