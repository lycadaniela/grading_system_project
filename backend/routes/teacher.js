// routes/teacher.js
const express = require('express');
const router = express.Router();
const { Teacher, sequelize, Sequelize } = require('../models/index'); // Import your Teacher model

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Create a new teacher
router.post('/', async (req, res) => {
  const {
    teacher_name,
    employee_number,
    email_address,
    courses,  // Corrected field name
    classes,
    username,
    password,
  } = req.body;

  console.log('Received data:', req.body);

  try {
    if (!teacher_name || !employee_number || !email_address || !courses || !classes || !username || !password) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newTeacher = await Teacher.create({
      teacher_name,
      employee_number,
      email_address,
      courses,  // Corrected field name
      classes,
      username,
      password,
    });

    console.log('New teacher created:', newTeacher);

    res.json(newTeacher);
  } catch (error) {
    console.error(error);

    res.status(500).send({ error: 'Internal Server Error', message: error.message });
  }
});

// Get a specific teacher by ID
router.get('/:id', async (req, res) => {
  const teacherId = req.params.id;
  try {
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Update a teacher by ID
router.put('/:id', async (req, res) => {
  const teacherId = req.params.id;
  const {
    teacher_name,
    employee_number,
    email_address,
    courses,
    classes,
    username,
    password,
  } = req.body;
  try {
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).send('Teacher not found');
    }

    if (
      !teacher_name ||
      !employee_number ||
      !email_address ||
      !courses ||
      !classes ||
      !username ||
      !password
    ) {
      return res
        .status(400)
        .json({ error: 'Please provide values for the required fields.' });
    }

    if (teacher_name) teacher.teacher_name = teacher_name;
    if (employee_number) teacher.employee_number = employee_number; // Corrected
    if (email_address) teacher.email_address = email_address;
    if (courses) teacher.courses = courses;
    if (classes) teacher.classes = classes;
    if (username) teacher.username = username;
    if (password) teacher.password = password;

    await teacher.save();
    res.json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Delete a teacher by ID
router.delete('/:id', async (req, res) => {
  const teacherId = req.params.id;
  try {
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      res.status(404).send('Teacher not found');
      return;
    }
    await teacher.destroy();
    res.send('Teacher deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

router.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.term;
  try {
    const teachers = await Teacher.findAll({
      where: {
        teacher_name: {
          [Sequelize.Op.iLike]: `%${searchTerm}%`, // Case-insensitive search
        },
      },
    });
    res.json(teachers);
  } catch (error) {
    console.error('Error in search endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
