const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Restaurant routes
router.post('/', authMiddleware(['restaurant_owner']), restaurantController.addRestaurant);
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.put('/:id', authMiddleware(['restaurant_owner']), restaurantController.updateRestaurant);
router.delete('/:id', authMiddleware(['restaurant_owner']), restaurantController.deleteRestaurant);

// Menu routes
router.post('/:restaurantId/menu', authMiddleware(['restaurant_owner']), restaurantController.addMenuItem);
router.get('/:restaurantId/menu', restaurantController.getMenuItems);
router.put('/menu/:id', authMiddleware(['restaurant_owner']), restaurantController.updateMenuItem);
router.delete('/menu/:id', authMiddleware(['restaurant_owner']), restaurantController.deleteMenuItem);

module.exports = router;
