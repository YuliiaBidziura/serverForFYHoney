const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    id: {type: Number, primaryKey: true, autoIncrement: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('User', UserModel);