const Router = require('express')
const CategoryController = require('../controllers/CategoryController.js')

const categoryRouter = new Router();

categoryRouter.post('/', CategoryController.create);
categoryRouter.get('/', CategoryController.getAll);
categoryRouter.get('/:id', CategoryController.getOne);
categoryRouter.put('/', CategoryController.update);
categoryRouter.delete('/:id', CategoryController.delete)

module.exports = categoryRouter;