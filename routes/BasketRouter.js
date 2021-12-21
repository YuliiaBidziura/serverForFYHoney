const Router = require('express')
const BasketController = require('../controllers/BasketController.js')
const cors = require('cors')
const basketRouter = new Router();

const corsOptions = {
    origin: 'https://yuliiabidziura.github.io/FYHoney',
    optionsSuccessStatus: 200 
}

basketRouter.post('/', cors(corsOptions), BasketController.create);
basketRouter.get('/:id', cors(corsOptions), BasketController.getOne);
basketRouter.put('/', cors(corsOptions), BasketController.update);
basketRouter.delete('/:id', cors(corsOptions), BasketController.delete)

module.exports = basketRouter;