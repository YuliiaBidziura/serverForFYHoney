const Router = require('express')
const UserRouter = require('./UserRouter.js')
const TypeRouter = require('./TypeRouter.js')
const CategoryRouter = require('./CategoryRouter.js')
const ProductRouter = require('./ProductRouter.js')
const BasketRouter = require('./BasketRouter.js')
const cors = require('cors')

const router = new Router()

const corsOptions = {
    origin: 'https://git.heroku.com/polar-caverns-45268.git ',
    optionsSuccessStatus: 200 
}

router.use('/user', cors(corsOptions), UserRouter);
router.use('/basket', cors(corsOptions), BasketRouter);
router.use('/category', cors(corsOptions), CategoryRouter);
router.use('/product', cors(corsOptions), ProductRouter);
router.use('/types', cors(corsOptions), TypeRouter);

module.exports = router;