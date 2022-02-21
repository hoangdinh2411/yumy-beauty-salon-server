const express = require('express');
const staffsController =require('../controllers/staffs.js');
const route = express.Router();

route.get('/', staffsController.getAll)
route.post('/', staffsController.create)
route.patch('/:id', staffsController.update)
route.delete('/:id', staffsController.delete)

module.exports = route