// models/course.js
const { DataTypes } = require('sequelize');

const Course = (sequelize) => {
  const model = sequelize.define('Course', {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'tbl_course', // Set the table name explicitly
    timestamps: false,
  });
  return model;
}



module.exports = Course;
