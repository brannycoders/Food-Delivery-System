const paymentService = require('../services/paymentService');

const createPayment = async (req, res) => {
    try {
        const payment = await paymentService.createPayment(req.body);
        res.status(201).json(payment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updatePaymentStatus = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const { status } = req.body;
        const updatedPayment = await paymentService.updatePaymentStatus(paymentId, status);
        res.json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createPayment, updatePaymentStatus };
