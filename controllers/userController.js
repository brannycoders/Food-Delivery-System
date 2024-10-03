const userService = require('../services/userService');

const getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.user.userId);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const user = await userService.updateUserProfile(req.user.userId, req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };
