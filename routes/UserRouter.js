const Router = require('express')
const UserController = require('../controllers/UserController.js')
const authModdleware = require('../middlevare/authMidlleware.js')
const cors = require('cors')
const userRouter = new Router()

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/FYHoney',
    optionsSuccessStatus: 200 
}

userRouter.post('/registration', cors(corsOptions), UserController.registration);
userRouter.post('/login', cors(corsOptions), UserController.login)
userRouter.get('/auth', cors(corsOptions), authModdleware,  UserController.check);

module.exports = userRouter;