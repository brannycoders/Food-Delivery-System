const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

class JwtHelper {
    generateToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
    }

    verifyToken(token) {
        return jwt.verify(token, SECRET_KEY);
    }
}

module.exports = new JwtHelper();
