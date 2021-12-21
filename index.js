const express = require('express')
const mongoose = require('mongoose')
const BasketModel = require('./models/BasketModel')
const CategoryModel = require('./models/CategoryModel')
const ProductModel = require('./models/ProductModel')
const TypeModel = require('./models/TypeModel')
const UserModel = require('./models/UserModel')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 80
const app = express()
const DB_URL = 'mongodb+srv://YuliiaBidziura:UsEr123@cluster0.xp0v5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/FYHoney',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);

const startApp = async() => {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
};

startApp()

