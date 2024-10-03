const notificationService = require('../services/notificationService');

const getUserNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.getUserNotifications(req.user.userId);
        res.json(notifications);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const markNotificationAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const updatedNotification = await notificationService.markNotificationAsRead(notificationId);
        res.json(updatedNotification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getUserNotifications, markNotificationAsRead };
