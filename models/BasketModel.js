const mongoose = require('mongoose')

const BasketModel = new mongoose.Schema({
    id: {type: String, primaryKey: true, autoIncrement: true},
    email: {type: String},
    name: {type: String},
    phone: {type: String},
    comment: {type: String},
    adress: {type: String},
    paymentMethod: {type: String},
    deliveryMethod: {type: String},
    order: {type: Object},
})

module.exports = mongoose.model('Basket', BasketModel)