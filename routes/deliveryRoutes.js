const express = require('express');
const deliveryController = require('../controllers/deliveryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware(['delivery_personnel']), deliveryController.createDelivery);
router.get('/', authMiddleware(['delivery_personnel', 'restaurant_owner']), deliveryController.getAllDeliveries);
router.get('/:id', authMiddleware(['delivery_personnel', 'restaurant_owner']), deliveryController.getDeliveryById);
router.put('/:id', authMiddleware(['delivery_personnel']), deliveryController.updateDelivery);
router.delete('/:id', authMiddleware(['delivery_personnel']), deliveryController.deleteDelivery);

module.exports = router;
//const express = require('express');
//const deliveryController = require('../controllers/deliveryController');
//const authMiddleware = require('../middlewares/authMiddleware');
// const router = express.Router();

router.post('/', authMiddleware(['delivery_personnel']), deliveryController.createDelivery);
router.get('/', authMiddleware(['delivery_personnel', 'restaurant_owner']), deliveryController.getAllDeliveries);
router.get('/:id', authMiddleware(['delivery_personnel', 'restaurant_owner']), deliveryController.getDeliveryById);
router.put('/:id', authMiddleware(['delivery_personnel']), deliveryController.updateDelivery);
router.delete('/:id', authMiddleware(['delivery_personnel']), deliveryController.deleteDelivery);

module.exports = router;
