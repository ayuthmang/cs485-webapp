var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// router.use(auth.initialize());
router.get('/users', userController.users);

module.exports = router;
