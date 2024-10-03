const orderRepository = require('../repositories/orderRepository');
const restaurantRepository = require('../repositories/restaurantRepository');
const notificationService = require('./notificationService');

class OrderService {
    async createOrder(orderData) {
        // Calculate total amount
        const restaurant = await restaurantRepository.getRestaurantById(orderData.restaurantId);
        let totalAmount = 0;

        for (const item of orderData.items) {
            const menuItem = await Menu.findById(item.menuItemId);
            totalAmount += menuItem.price * item.quantity;
        }

        const order = await orderRepository.createOrder({ ...orderData, totalAmount });
        return order;
    }

    async getAllOrders() {
        return await orderRepository.getAllOrders();
    }

    async getOrderById(id) {
        return await orderRepository.getOrderById(id);
    }

    async updateOrderStatus(orderId, status) {
        return await orderRepository.updateOrder(orderId, { status });
    }

    async updateEstimatedDeliveryTime(orderId, estimatedDeliveryTime) {
        return await orderRepository.updateOrder(orderId, { estimatedDeliveryTime });
    }
    async updateOrderStatus(orderId, status) {
        const order = await orderRepository.updateOrder(orderId, { status });
        
        const message = `Your order status has been updated to ${status}`;
        await notificationService.sendNotification(order.customerId, message, 'order_status');
        
        return order;
    }
    
}




module.exports = new OrderService();