const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("../Models/User")

const login = async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  // Generate a JWT token
  const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  });
};

module.exports = { login };
