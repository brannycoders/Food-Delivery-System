const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true }
});

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact_info: { type: String },
  menu: [MenuSchema]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
