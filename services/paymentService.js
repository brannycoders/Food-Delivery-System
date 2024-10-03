const paymentRepository = require('../repositories/paymentRepository');
const notificationService = require('./notificationService');

class PaymentService {
    async createPayment(paymentData) {
        return await paymentRepository.createPayment(paymentData);
    }

    async updatePaymentStatus(paymentId, status) {
        return await paymentRepository.updatePayment(paymentId, { status });
    }

    async updatePaymentStatus(paymentId, status) {
        const payment = await paymentRepository.updatePayment(paymentId, { status });
        
        const message = `Your payment status has been updated to ${status}`;
        await notificationService.sendNotification(payment.orderId.customerId, message, 'payment_status');
        
        return payment;
    }
}





module.exports = new PaymentService();
