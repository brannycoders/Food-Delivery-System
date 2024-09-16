const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place a new order
router.post('/', async (req, res) => {
  const { user_id, restaurant_id, ordered_items, total_cost } = req.body;
  try {
    const order = new Order({ user_id, restaurant_id, ordered_items, total_cost });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// View order history
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
