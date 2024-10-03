const Menu = require('../models/Menu');

class MenuRepository {
    async createMenuItem(data) {
        const menuItem = new Menu(data);
        return await menuItem.save();
    }

    async getMenuItemsByRestaurant(restaurantId) {
        return await Menu.find({ restaurantId });
    }

    async updateMenuItem(id, data) {
        return await Menu.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteMenuItem(id) {
        return await Menu.findByIdAndDelete(id);
    }
}

module.exports = new MenuRepository();
