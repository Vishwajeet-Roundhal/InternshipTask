// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require("../Models/Contact")

// POST route to handle contact form submission
router.post('/submit', async (req, res) => {
  try {
    const { fullName, email, mobileNumber, qualification, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      fullName,
      email,
      mobileNumber,
      qualification,
      message,
    });

    // Save to the database
    await newContact.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});



module.exports = router;
