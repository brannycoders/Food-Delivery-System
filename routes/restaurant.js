const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// CRUD operations for menu items (can be nested under /restaurants/:id/menu)
router.post('/:id/menu', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ msg: 'Restaurant not found' });

    restaurant.menu.push(req.body);
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
