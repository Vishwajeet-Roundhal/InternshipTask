const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded data to request object
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ msg: 'Admin access only' });
};

module.exports = { authMiddleware, isAdmin };
