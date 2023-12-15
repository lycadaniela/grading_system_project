// models/index.js
const { sequelize } = require('../config/database');

const AdminModel = require('./admin');
const ClassModel = require('./classname');
const CourseModel = require('./course');
const StudentModel = require('./student');
const TeacherModel = require('./teacher');

module.exports = {
  Admin: AdminModel(sequelize),
  Classname: ClassModel(sequelize),
  Course: CourseModel(sequelize),
  Student: StudentModel(sequelize),
  Teacher: TeacherModel(sequelize),
};
