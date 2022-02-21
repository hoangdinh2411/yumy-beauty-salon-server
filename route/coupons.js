const express = require('express');
const couponsController = require('../controllers/coupons.js');


const route = express.Router()

route.post('/', couponsController.create )
route.get('/', couponsController.getAll )
route.patch('/:id', couponsController.update )
route.delete('/:id', couponsController.delete )

module.exports = route