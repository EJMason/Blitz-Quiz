const Promise = require('bluebird');
const sequelize = require('./connection');

const seeder = require('./seedData/seedMethods');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		var Answer = require('./../models/answers.model');
		var Class = require('./../models/classes.model');
		var Question = require('./../models/questions.model');
		var Student = require('./../models/students.model');
		var Teacher = require('./../models/teachers.model');
		var Test = require('./../models/tests.model');
		
		Teacher.hasMany(Class);
		Class.belongsTo(Teacher);

		Class.hasMany(Test);
		Test.belongsTo(Class);

		Test.hasMany(Question);
		Question.belongsTo(Test);

		Question.hasMany(Answer);
		Answer.belongsTo(Question);

		Student.hasMany(Answer);
		Answer.belongsTo(Student);

		Class.belongsToMany(Student, {
			through: 'class_student'
		});
		Student.belongsToMany(Class, {
			through: 'class_student'
		});
		
		sequelize.sync(/*{force: true}*/).then(err => {
			resolve();
		});
	});
};

module.exports = initDatabase;