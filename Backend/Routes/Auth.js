const express = require('express');
const { login } = require("../Controllers/authController")
const { authMiddleware, isAdmin} = require("../Middleware/authMiddleware")

const router = express.Router();

// Login Route
router.post('/login', login);

// Protected Admin Route
router.get('/admin/dashboard', authMiddleware, isAdmin, (req, res) => {
  res.json({ msg: 'Welcome to the Admin Dashboard' });
});

module.exports = router;
