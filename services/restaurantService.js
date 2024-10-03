const restaurantRepository = require('../repositories/restaurantRepository');
const menuRepository = require('../repositories/menuRepository');

class RestaurantService {
    async addRestaurant(data) {
        return await restaurantRepository.createRestaurant(data);
    }

    async getAllRestaurants() {
        return await restaurantRepository.getAllRestaurants();
    }

    async getRestaurantById(id) {
        return await restaurantRepository.getRestaurantById(id);
    }

    async updateRestaurant(id, data) {
        return await restaurantRepository.updateRestaurant(id, data);
    }

    async deleteRestaurant(id) {
        return await restaurantRepository.deleteRestaurant(id);
    }

    async addMenuItem(restaurantId, menuData) {
        const menuItem = await menuRepository.createMenuItem({ ...menuData, restaurantId });
        await restaurantRepository.updateRestaurant(restaurantId, { $push: { menu: menuItem._id } });
        return menuItem;
    }

    async getMenuItems(restaurantId) {
        return await menuRepository.getMenuItemsByRestaurant(restaurantId);
    }

    async updateMenuItem(id, data) {
        return await menuRepository.updateMenuItem(id, data);
    }

    async deleteMenuItem(id) {
        return await menuRepository.deleteMenuItem(id);
    }
}

module.exports = new RestaurantService();
