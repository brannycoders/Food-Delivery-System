const Order = require('../models/Order');

class OrderRepository {
    async createOrder(orderData) {
        const order = new Order(orderData);
        return await order.save();
    }

    async getAllOrders() {
        return await Order.find().populate('userId restaurantId items.menuItemId');
    }

    async getOrderById(id) {
        return await Order.findById(id).populate('userId restaurantId items.menuItemId');
    }

    async updateOrder(id, data) {
        return await Order.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteOrder(id) {
        return await Order.findByIdAndDelete(id);
    }
}

module.exports = new OrderRepository();
