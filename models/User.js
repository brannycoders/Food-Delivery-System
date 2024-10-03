const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'restaurant_owner', 'delivery_personnel'], default: 'customer' },
    address: { type: String },
    phone: { type: String },
    profilePicture: { type: String },
});


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
