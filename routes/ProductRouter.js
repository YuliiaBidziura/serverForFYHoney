const Router = require('express')
const ProductController = require('../controllers/ProductController.js')
const cors = require('cors')

const productRouter = new Router();

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/',
    optionsSuccessStatus: 200 
}

productRouter.post('/', cors(corsOptions), ProductController.create);
productRouter.get('/', cors(corsOptions), ProductController.getAll);
productRouter.get('/:id', cors(corsOptions), ProductController.getOne);
productRouter.put('/', cors(corsOptions), ProductController.update);
productRouter.delete('/:id', cors(corsOptions), ProductController.delete);

module.exports = productRouter;