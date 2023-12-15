// server.js
require('dotenv').config();
console.log(process.env);

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Admin } = require('./config/database');
const cors = require('cors');
// Import other models as needed

// Import class route
const adminRoutes = require('./routes/admin');
const classnameRoutes = require('./routes/classname');
const courseRoutes = require('./routes/course');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
// Import other routes as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Your API routes go here
app.use('/api/admins', adminRoutes);
app.use('/api/classes', classnameRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
// Use other routes as needed

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
