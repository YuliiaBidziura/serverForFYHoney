const Router = require('express')
const UserRouter = require('./UserRouter.js')
const TypeRouter = require('./TypeRouter.js')
const CategoryRouter = require('./CategoryRouter.js')
const ProductRouter = require('./ProductRouter.js')
const BasketRouter = require('./BasketRouter.js')

const router = new Router()

router.use('/user', UserRouter);
router.use('/basket', BasketRouter);
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/types', TypeRouter);

module.exports = router;