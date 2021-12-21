const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 80
const app = express()
const DB_URL = 'mongodb+srv://YuliiaBidziura:UsEr123@cluster0.xp0v5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({ }));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
};

startApp();