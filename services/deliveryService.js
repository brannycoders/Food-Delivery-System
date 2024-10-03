const deliveryRepository = require('../repositories/deliveryRepository');
const orderRepository = require('../repositories/orderRepository');
const userRepository = require('../repositories/userRepository');

class DeliveryService {
    async createDelivery(deliveryData) {
        const order = await orderRepository.getOrderById(deliveryData.orderId);
        if (!order) throw new Error('Order not found');

        const delivery = await deliveryRepository.createDelivery(deliveryData);
        return delivery;
    }

    async getAllDeliveries() {
        return await deliveryRepository.getAllDeliveries();
    }

    async getDeliveryById(id) {
        return await deliveryRepository.getDeliveryById(id);
    }

    async updateDelivery(id, data) {
        return await deliveryRepository.updateDelivery(id, data);
    }

    async deleteDelivery(id) {
        return await deliveryRepository.deleteDelivery(id);
    }
}

module.exports = new DeliveryService();
