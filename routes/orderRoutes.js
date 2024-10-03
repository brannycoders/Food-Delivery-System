const express = require('express');
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware(['customer']), orderController.createOrder);
router.get('/', authMiddleware(['customer', 'restaurant_owner', 'delivery_personnel']), orderController.getAllOrders);
router.get('/:id', authMiddleware(['customer', 'restaurant_owner', 'delivery_personnel']), orderController.getOrderById);
router.put('/:id', authMiddleware(['restaurant_owner', 'delivery_personnel']), orderController.updateOrder);
router.delete('/:id', authMiddleware(['customer', 'restaurant_owner']), orderController.deleteOrder);
router.put('/:orderId/status', authMiddleware(['restaurant_owner', 'delivery_personnel']), orderController.updateOrderStatus);
router.put('/:orderId/delivery-time', authMiddleware(['restaurant_owner', 'delivery_personnel']), orderController.updateEstimatedDeliveryTime);


module.exports = router;



