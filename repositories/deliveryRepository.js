const Delivery = require('../models/Delivery');

class DeliveryRepository {
    async createDelivery(deliveryData) {
        const delivery = new Delivery(deliveryData);
        return await delivery.save();
    }

    async getAllDeliveries() {
        return await Delivery.find().populate('orderId deliveryPersonnelId');
    }

    async getDeliveryById(id) {
        return await Delivery.findById(id).populate('orderId deliveryPersonnelId');
    }

    async updateDelivery(id, data) {
        return await Delivery.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteDelivery(id) {
        return await Delivery.findByIdAndDelete(id);
    }
}

module.exports = new DeliveryRepository();
