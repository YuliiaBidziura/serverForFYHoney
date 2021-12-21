const Router = require('express')
const CategoryController = require('../controllers/CategoryController.js')
const cors = require('cors')
const categoryRouter = new Router();

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/',
    optionsSuccessStatus: 200 
}

categoryRouter.post('/', cors(corsOptions), CategoryController.create);
categoryRouter.get('/', cors(corsOptions), CategoryController.getAll);
categoryRouter.get('/:id', cors(corsOptions), CategoryController.getOne);
categoryRouter.put('/', cors(corsOptions), CategoryController.update);
categoryRouter.delete('/:id', cors(corsOptions), CategoryController.delete)

module.exports = categoryRouter;