const express = require('express');
const EntregaController = require('./controllers/EntregaController');

const routes = express.Router();

routes.get('/entregas', EntregaController.index);
routes.post('/entregas', EntregaController.store);
routes.put('/entregas/:id', EntregaController.update);
routes.delete('/entregas/:id', EntregaController.delete);

module.exports = routes;