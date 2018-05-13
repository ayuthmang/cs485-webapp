var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// router.use(auth.initialize());
router.get('/users', userController.getUsers);
router.get('/user/:username', userController.getUsersByUsername);
router.post('/user', userController.createUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;
