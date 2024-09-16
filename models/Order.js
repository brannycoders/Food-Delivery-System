const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  ordered_items: [{ type: String, required: true }],
  total_cost: { type: Number, required: true },
  order_status: { type: String, enum: ['pending', 'preparing', 'out for delivery', 'delivered'], default: 'pending' }
});

module.exports = mongoose.model('Order', OrderSchema);
