const deliveryService = require('../services/deliveryService');

const createDelivery = async (req, res) => {
    try {
        const delivery = await deliveryService.createDelivery({ ...req.body, deliveryPersonnelId: req.user.userId });
        res.status(201).json(delivery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await deliveryService.getAllDeliveries();
        res.json(deliveries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getDeliveryById = async (req, res) => {
    try {
        const delivery = await deliveryService.getDeliveryById(req.params.id);
        if (!delivery) return res.status(404).json({ message: 'Delivery not found' });
        res.json(delivery);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateDelivery = async (req, res) => {
    try {
        const delivery = await deliveryService.updateDelivery(req.params.id, req.body);
        res.json(delivery);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteDelivery = async (req, res) => {
    try {
        await deliveryService.deleteDelivery(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createDelivery,
    getAllDeliveries,
    getDeliveryById,
    updateDelivery,
    deleteDelivery,
};
