// routes/admin.js
const express = require('express');
const router = express.Router();
const { Admin } = require('../models/index');

// Get all admins
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.findAll();
    console.log('Fetched data from /api/admins endpoint:', admins);
    res.json(admins);
  } catch (error) {
    console.error('Error in /api/admins endpoint:', error);
    res.status(500).send({ error: error.message }); // Send the error message in the response
  }
});

// Create a new admin
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const newAdmin = await Admin.create({
      username,
      password,
    });

    console.log('New admin created:', newAdmin);

    res.json(newAdmin);
  } catch (error) {
    console.error('Error creating a new admin:', error);
    res.status(500).send({ error: error.message });
  }
});

// Get a specific admin by ID
router.get('/:id', async (req, res) => {
  const adminId = req.params.id;
  try {
    console.log('Attempting to find admin with ID:', adminId);

    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      console.log('Admin not found for ID:', adminId);
      return res.status(404).json({ error: 'Admin not found' });
    }

    console.log('Retrieved admin:', admin);

    res.json(admin);
  } catch (error) {
    console.error('Error retrieving admin by ID:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update an admin by ID
router.put('/:id', async (req, res) => {
  const adminId = req.params.id;
  const { username, password } = req.body;
  try {
    console.log('Attempting to update admin with ID:', adminId);

    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      console.log('Admin not found for update with ID:', adminId);
      return res.status(404).json({ error: 'Admin not found' });
    }

    console.log('Found admin for update:', admin);

    admin.username = username;
    admin.password = password;
    
    await admin.save();

    console.log('Admin updated successfully:', admin);

    res.json(admin);
  } catch (error) {
    console.error('Error updating admin by ID:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete an admin by ID
router.delete('/:id', async (req, res) => {
  const adminId = req.params.id;
  try {
    console.log('Attempting to delete admin with ID:', adminId);

    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      console.log('Admin not found for deletion with ID:', adminId);
      return res.status(404).json({ error: 'Admin not found' });
    }

    console.log('Found admin for deletion:', admin);

    await admin.destroy();

    console.log('Admin deleted successfully');

    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin by ID:', error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
