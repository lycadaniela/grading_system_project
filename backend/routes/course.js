// routes/course.js
const express = require('express');
const router = express.Router();
const { Course, sequelize, Sequelize } = require('../models/index');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.findAll();
    console.log('Fetched data from /api/courses endpoint:', courses);
    res.json(courses);
  } catch (error) {
    console.error('Error in /api/courses endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});

// Create a new course
router.post('/', async (req, res) => {
  console.log(req.body); // Log the request body
  const { course_name, course_code } = req.body;

  try {
    // Check if required fields are provided
    if (!course_name || !course_code) {
      return res.status(400).json({ error: 'Please provide values for course_name, course_code.' });
    }

    // Create a new course using Sequelize model
    const newCourse = await Course.create({ course_name, course_code });

    // Send the new course in the response
    res.json(newCourse);
  } catch (error) {
    console.error(error);

    // Handle specific Sequelize validation errors
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err => ({
        field: err.path,
        message: err.message
      }));
      return res.status(400).json({ error: 'Validation error', validationErrors });
    }

    // Handle other errors
    res.status(500).json({ error: error.message });
  }
});


// Get a specific course by ID
router.get('/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

// Update a course by ID
router.put('/:id', async (req, res) => {
  const courseId = req.params.id;
  const { course_name, course_code } = req.body;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Check if at least one field is provided for updating
    if (!course_name && !course_code) {
      return res.status(400).json({ error: 'Please provide at least one field (course_name, course_code) to update.' });
    }

    // Update the course fields if provided
    if (course_name) course.course_name = course_name;
    if (course_code) course.course_code = course_code;

    await course.save();
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Delete the course
    await course.destroy();

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.term;
  try {
    const courses = await Course.findAll({
      where: {
        course_name: {
          [Sequelize.Op.iLike]: `%${searchTerm}%`, // Case-insensitive search
        },
      },
    });
    res.json(courses);
  } catch (error) {
    console.error('Error in search endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
