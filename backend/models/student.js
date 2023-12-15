// models/student.js
const { DataTypes } = require('sequelize');

const Student = (sequelize) => {
  const model = sequelize.define('Student', {
  student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  student_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  student_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year_level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course: {
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
  tableName: 'tbl_student', // Set the table name explicitly
  timestamps: false,
  
});
return model;
}

module.exports = Student;
