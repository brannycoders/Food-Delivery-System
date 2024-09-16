const express = require('express');
const router = express.Router();
const Delivery = require('../models/Delivery');

// Assign a delivery person to an order
router.post('/', async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
