const Router = require('express')
const ProductController = require('../controllers/ProductController.js')
const productRouter = new Router();


productRouter.post('/', ProductController.create);
productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getOne);
productRouter.put('/', ProductController.update);
productRouter.delete('/:id', ProductController.delete);

module.exports = productRouter;