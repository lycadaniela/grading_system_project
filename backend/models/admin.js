// models/admin.js
const { DataTypes } = require('sequelize');

const Admin = (sequelize) => {
  const model = sequelize.define('Admin', {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tableName: 'tbl_admin', // Set the table name explicitly
    timestamps: false,
  });

  return model;
};

module.exports = Admin;