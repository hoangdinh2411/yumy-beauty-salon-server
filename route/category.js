const express = require('express');
const categoryController = require('../controllers/category.js');
const route = express.Router()

route.post('/', categoryController.create )
route.get('/', categoryController.getCategories )
route.patch('/:id', categoryController.update )
route.delete('/:id', categoryController.delete )

module.exports = route