//vou buscar a rota raiz
const routes = require('express').Router();
const lensson1Contrloller = require('../controller/lesson1');
 
routes.get('/', lensson1Contrloller.getAllTask);
routes.post('/create', lensson1Contrloller.createTask);

module.exports = routes;