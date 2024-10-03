const Restaurant = require('../models/Restaurant');

class RestaurantRepository {
    async createRestaurant(data) {
        const restaurant = new Restaurant(data);
        return await restaurant.save();
    }

    async getAllRestaurants() {
        return await Restaurant.find().populate('menu');
    }

    async getRestaurantById(id) {
        return await Restaurant.findById(id).populate('menu');
    }

    async updateRestaurant(id, data) {
        return await Restaurant.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteRestaurant(id) {
        return await Restaurant.findByIdAndDelete(id);
    }
}

module.exports = new RestaurantRepository();
