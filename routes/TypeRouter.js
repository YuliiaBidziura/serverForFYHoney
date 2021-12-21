const Router = require('express')
const TypeController = require('../controllers/TypeController.js')
const typeRouter = new Router();

typeRouter.post('/', TypeController.create);
typeRouter.get('/', TypeController.getAll);
typeRouter.get('/:id', TypeController.getOne);
typeRouter.put('/', TypeController.update);
typeRouter.delete('/:id', TypeController.delete)

module.exports = typeRouter;
