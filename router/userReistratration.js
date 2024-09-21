const express = require('express');
const router = express.Router();
const User = require('../model/userModel.js'); 

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // For existing user
    let user = await User.findOne({ email });
    if (user) 
      return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10)
    

    // For new User
    user = new User({
      username,
      email,
      password,
      role
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
