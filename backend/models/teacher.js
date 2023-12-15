// models/teacher.js
const { DataTypes } = require('sequelize');

const Teacher = (sequelize) => {
  const model = sequelize.define('Teacher', {
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'tbl_teacher', // Set the table name explicitly
    timestamps: false,
  });

  return model;
}

module.exports = Teacher;