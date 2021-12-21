const Router = require('express')
const UserController = require('../controllers/UserController.js')
const authModdleware = require('../middlevare/authMidlleware.js')
const userRouter = new Router();

userRouter.post('/registration', UserController.registration);
userRouter.post('/login', UserController.login)
userRouter.get('/auth', authModdleware,  UserController.check);

module.exports = userRouter;