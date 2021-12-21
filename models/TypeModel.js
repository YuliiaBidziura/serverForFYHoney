const mongoose = require('mongoose')

const TypeModel = new mongoose.Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    title: {type: String, unique: true, allowNull: false}
})

module.exports = mongoose.model('Type', TypeModel);