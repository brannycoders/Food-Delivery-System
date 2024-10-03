const restaurantService = require('../services/restaurantService');

const addRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.addRestaurant(req.body);
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantService.getAllRestaurants();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await restaurantService.getRestaurantById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        await restaurantService.deleteRestaurant(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Menu item routes
const addMenuItem = async (req, res) => {
    try {
        const menuItem = await restaurantService.addMenuItem(req.params.restaurantId, req.body);
        res.status(201).json(menuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getMenuItems = async (req, res) => {
    try {
        const menuItems = await restaurantService.getMenuItems(req.params.restaurantId);
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateMenuItem = async (req, res) => {
    try {
        const menuItem = await restaurantService.updateMenuItem(req.params.id, req.body);
        res.json(menuItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteMenuItem = async (req, res) => {
    try {
        await restaurantService.deleteMenuItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    addRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    addMenuItem,
    getMenuItems,
    updateMenuItem,
    deleteMenuItem,
};
