const BasketModel = require('../models/BasketModel.js')

class BasketService {
    async create(id, order) {
    const createBasket = await BasketModel.create(id, order);
        return createBasket;
    };
    async getOne(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const basket = await BasketModel.findById(id);
        return basket;
    };
    async update(basket) {
        if(!basket._id) {
            throw new Error('ID не вказано!');
        };
        const updateBasket = await BasketModel.findByIdAndUpdate(basket._id, basket, {new: true});
        return updateBasket;
    };
    async delete(id) {
        if(!id) {
            throw new Error('ID не вказано!');
        };
        const basket = await BasketModel.findByIdAndDelete(id);
        return basket;
    }
}

module.exports = new BasketService()