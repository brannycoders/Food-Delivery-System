const notificationRepository = require('../repositories/notificationRepository');
const { sendRealTimeNotification } = require('../utils/websocket');
const emailHelper = require('../utils/emailHelper');

class NotificationService {
    async sendNotification(recipientId, message, type) {
        return await notificationRepository.createNotification({ recipientId, message, type });
    }

    async getUserNotifications(userId) {
        return await notificationRepository.getUserNotifications(userId);
    }

    async markNotificationAsRead(notificationId) {
        return await notificationRepository.markAsRead(notificationId);
    }
async sendNotification(recipientId, message, type) {
    const notification = await notificationRepository.createNotification({ recipientId, message, type });
    sendRealTimeNotification(recipientId, { message, type });  // Send WebSocket notification
    return notification;
}

async sendNotification(recipientId, message, type) {
    const user = await userRepository.findUserById(recipientId);
    const notification = await notificationRepository.createNotification({ recipientId, message, type });
    
    sendRealTimeNotification(recipientId, { message, type });  // WebSocket notification
    await emailHelper.sendEmail(user.email, `Notification: ${type}`, message);  // Email notification
    
    return notification;
}


}


module.exports = new NotificationService();
