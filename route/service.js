const express = require('express');
const serviceController = require('../controllers/service.js');
const route = express.Router()

route.post('/', serviceController.addNewService )
route.get('/', serviceController.getServices )
route.delete('/:id', serviceController.delete )
route.patch('/:id', serviceController.update )

module.exports = route