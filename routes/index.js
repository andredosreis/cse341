//vou buscar a rota raiz
const routes = require('express').Router();
const lensson1Contrloller = require('../controller/lesson1');
 
routes.get('/', lensson1Contrloller.andrereis);
routes.get('/emily', lensson1Contrloller.emilyRoute);
routes.get('/hannah', lensson1Contrloller.hannnhRoute);

module.exports = routes;