var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController');

// router.use(auth.initialize());
router.get('/orders', orderController.getOrders);
router.get('/order/:username', orderController.getOrderByUserOwner);
router.post('/order', orderController.createOrder);
// router.put('/order', orderController.updateorder);
router.delete('/order', orderController.deleteOrder);

module.exports = router;
