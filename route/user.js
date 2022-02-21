const express = require('express');
const userController =require('../controllers/user.js')
const router = express.Router()

router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
router.patch('/:id',userController.updateProfile);
router.post('/resetPassword',userController.resetPassword);

module.exports = router