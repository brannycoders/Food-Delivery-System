const Notification = require('../models/Notification');

class NotificationRepository {
    async createNotification(notificationData) {
        const notification = new Notification(notificationData);
        return await notification.save();
    }

    async getUserNotifications(userId) {
        return await Notification.find({ recipientId: userId }).sort({ createdAt: -1 });
    }

    async markAsRead(notificationId) {
        return await Notification.findByIdAndUpdate(notificationId, { isRead: true }, { new: true });
    }
}

module.exports = new NotificationRepository();
