class UserService {
    async getUserProfile(userId) {
        return await userRepository.findUserById(userId);
    }

    async updateUserProfile(userId, userData) {
        return await userRepository.updateUser(userId, userData);
    }
}

module.exports = new UserService();
