const Router = require('express')
const BasketController = require('../controllers/BasketController.js')
const basketRouter = new Router();

basketRouter.post('/', BasketController.create);
basketRouter.get('/:id', BasketController.getOne);
basketRouter.put('/', BasketController.update);
basketRouter.delete('/:id', BasketController.delete)

module.exports = basketRouter;