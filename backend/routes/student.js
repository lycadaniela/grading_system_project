// routes/student.js
const express = require('express');
const router = express.Router();
const { Student, sequelize, Sequelize } = require('../models/index'); // Import your Student model

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Create a new student
router.post('/', async (req, res) => {
  const {
    student_name,
    student_number,
    department,
    year_level,
    course,
    username,
    password,
  } = req.body;

  console.log('Received data:', req.body);

  try {
    if (!student_name || !student_number || !department || !year_level || !course || !username || !password) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newStudent = await Student.create({
      student_name,
      student_number,
      department,
      year_level,
      course,
      username,
      password,
    });

    console.log('New student created:', newStudent);

    res.json(newStudent);
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Handle errors as needed
    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
});

// Get a specific student by ID
router.get('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Update a student by ID
router.put('/:id', async (req, res) => {
  const studentId = req.params.id;
  const {
    student_name,
    student_number,
    department,
    year_level,
    course,
    username,
    password,
  } = req.body;
  try {
    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).send('Student not found');
    }

    if (
      !student_name &&
      !student_number &&
      !department &&
      !year_level &&
      !course &&
      !username &&
      !password
    ) {
      return res
        .status(400)
        .json({ error: 'Please provide values for the required fields.' });
    }

    if (student_name) student.student_name = student_name;
    if (student_number) student.student_number = student_number; // Corrected
    if (department) student.department = department;
    if (year_level) student.year_level = year_level;
    if (course) student.course = course;
    if (username) student.username = username;
    if (password) student.password = password;

    await student.save();
    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await Student.findByPk(studentId);
    if (!student) {
      res.status(404).send('Student not found');
      return;
    }
    await student.destroy();
    res.send('Student deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

router.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.term;
  try {
    const students = await Student.findAll({
      where: {
        student_name: {
          [Sequelize.Op.iLike]: `%${searchTerm}%`, // Case-insensitive search
        },
      },
    });
    res.json(students);
  } catch (error) {
    console.error('Error in search endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
