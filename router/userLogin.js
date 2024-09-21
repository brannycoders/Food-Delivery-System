const express = require('express');
const router = express.Router();
const User = require('../model/userModel.js'); 
const jwt = require('jsonwebtoken');

// Login user and return JWT
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
  
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
