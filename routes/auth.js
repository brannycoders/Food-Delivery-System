const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registration Route
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });
    
    user = new User({ username, email, password, role });
    await user.save();
    delete user.password;
    res.status(201).json({ msg: 'User registered successfully', user });

  
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error)


  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
