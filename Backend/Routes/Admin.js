// routes/contactRoutes.js
const express = require('express');
const Contact = require('../Models/Contact')
const router = express.Router();

// Route to get all contacts (for admin)
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts from the database
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

