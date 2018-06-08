var express = require('express');
var router = express.Router();
var orderController = require('../controllers/authenController');

router.post('/login', orderController.login);

module.exports = router;
