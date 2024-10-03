const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    deliveryPersonnelId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'on the way', 'delivered', 'cancelled'], default: 'pending' },
    deliveryTime: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Delivery', deliverySchema);
