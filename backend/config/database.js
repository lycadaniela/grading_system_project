// config/database.js
const { Sequelize } = require('sequelize');
const AdminModel = require('../models/admin');
const ClassModel = require('../models/classname');
const CourseModel = require('../models/course');
const StudentModel = require('../models/student');
const TeacherModel = require('../models/teacher');


console.log('Initializing Sequelize...');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'user',
  password: '3ackend',
  database: 'gs_backend',
  port: 3306,
  dialectOptions: {
    connectTimeout: 60000,
  },
});

const Admin = AdminModel(sequelize);
const Classname = ClassModel(sequelize);
const Course = CourseModel(sequelize);
const Student = StudentModel(sequelize);
const Teacher = TeacherModel(sequelize);

console.log('Attempting to authenticate with the database...');
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
    process.exit(1);
  });

  module.exports = {
    Admin,
    Classname,
    Course,
    Student,
    Teacher,
    sequelize,
  };
