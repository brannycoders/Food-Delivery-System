const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwtHelper');

class AuthService {
    async register(userData) {
        const existingUser = await userRepository.findUserByEmail(userData.email);
        if (existingUser) throw new Error('User already exists');
        return await userRepository.createUser(userData);
    }

    async login(email, password) {
        const user = await userRepository.findUserByEmail(email);
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            throw new Error('Invalid email or password');
        
        }
        const token = jwt.generateToken({ userId: user._id, role: user.role });
        return { user, token };
    }
}

module.exports = new AuthService();
