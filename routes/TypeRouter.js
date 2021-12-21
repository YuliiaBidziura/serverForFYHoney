const Router = require('express')
const TypeController = require('../controllers/TypeController.js')
const cors = require('cors')

const typeRouter = new Router()

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/FYHoney',
    optionsSuccessStatus: 200 
}

typeRouter.post('/', cors(corsOptions), TypeController.create);
typeRouter.get('/', cors(corsOptions), TypeController.getAll);
typeRouter.get('/:id', cors(corsOptions), TypeController.getOne);
typeRouter.put('/', cors(corsOptions), TypeController.update);
typeRouter.delete('/:id', cors(corsOptions), TypeController.delete)

module.exports = typeRouter;
