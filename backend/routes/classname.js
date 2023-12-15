// routes/class.js
const express = require('express');
const router = express.Router();
const { Classname, sequelize, Sequelize } = require('../models/index'); // Assuming your Class model is named Class

// Get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Classname.findAll();
    console.log('Fetched data from /api/classes endpoint:', classes);
    res.json(classes);
  } catch (error) {
    console.error('Error in /api/classes endpoint:', error);
    res.status(500).send({ error: error.message });
  }
});

// Create a new class
router.post('/', async (req, res) => {
  const { department, year_level, block } = req.body;

  try {
    // Check if required fields are provided
    if (!department || !year_level || !block) {
      return res.status(400).json({ error: 'Please provide values for department, year_level, block.' });
    }

    const newClass = await Classname.create({ department, year_level, block });

    console.log('New class created:', newClass);

    res.json(newClass);
  } catch (error) {
    console.error('Error creating a new class:', error);

    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err => ({
        field: err.path,
        message: err.message
      }));
      return res.status(400).json({ error: 'Validation error', validationErrors });
    }

    res.status(500).send({ error: error.message });
  }
});

// Get a specific class by ID
router.get('/:id', async (req, res) => {
  const classId = req.params.id;
  try {
    console.log('Attempting to find class with ID:', classId);
    const classObj = await Classname.findByPk(classId);
    if (!classObj) {
      return res.status(404).json({ error: 'Class not found' });
    }
    console.log('Retrieved class:', classObj);
    res.json(classObj);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a class by ID
router.put('/:id', async (req, res) => {
  const classId = req.params.id;
  const { department, year_level, block } = req.body;
  try {
    console.log('Attempting to update class with ID:', classId);

    const classObj = await Classname.findByPk(classId);
    if (!classObj) {
      console.log('Class not found for update with ID:', classId);
      return res.status(404).json({ error: 'Class not found' });
    }

    if (!department && !year_level && !block) {
      return res.status(400).json({ error: 'Please provide at least one field (department, year_level, block) to update.' });
    }

    // Update the class fields if provided
    if (department) classObj.department = department;
    if (year_level) classObj.year_level = year_level;
    if (block) classObj.block = block;

    await classObj.save();
    console.log('Class updated successfully:', classObj);
    res.json(classObj);
  } catch (error) {
    console.error('Error updating class by ID:', error);
    res.status(500).send({ error: error.message });
  }
});

// Delete a class by ID
router.delete('/:id', async (req, res) => {
  const classId = req.params.id;
  try {
    const classObj = await Classname.findByPk(classId);
    if (!classObj) {
      return res.status(404).json({ error: 'Class not found' });
    }
    await classObj.destroy();
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    console.error('Error deleting class by ID:', error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.term;
  try {
    const courses = await Classname.findAll({
      where: {
        department: {
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
