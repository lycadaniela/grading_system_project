// models/classname.js
const { DataTypes } = require('sequelize');

const Classname = (sequelize) => {
  const model = sequelize.define('Classname', {
    class_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year_level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  block: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tbl_class', // Set the table name explicitly
  timestamps: false,
});

return model;
}

module.exports = Classname;