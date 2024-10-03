const express = require('express');
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware(['customer']), paymentController.createPayment);
router.put('/:paymentId/status', authMiddleware(['customer', 'restaurant_owner']), paymentController.updatePaymentStatus);

module.exports = router;
