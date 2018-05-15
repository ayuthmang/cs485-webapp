/*

router.get('/orders', userController.getUsers);
router.get('/order/:id', userController.getUsersByUsername);
router.post('/order', userController.createUser);
router.put('/order', userController.updateUser);
router.delete('/order', userController.deleteUser);
*/

const Order = require('../models/orderModel');
const validator = require('validator');

// Retrieve and return all Users from the database.
exports.getOrders = (req, res) => {
  var orderProjection = {
    // __v: false,
    // _id: false
  };
  Order.find({}, orderProjection)
    .then(orders => {
      res.send({
        status: true,
        status_code: 200,
        status_message: 'succeed',
        data: orders
      });
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        status_code: 500,
        status_message: err.errmsg
      });
    });
};

exports.getOrderByUserOwner = (req, res) => {
  const { username } = req.params;
  var orderProjection = {
    // _id: false,
    // __v: false
  };
  Order.find({ user_owner: username }, orderProjection)
    .then(orders => {
      if (orders.legnth > 0) {
        res.send({
          status: true,
          status_code: 200,
          status_message: 'succeed',
          data: orders
        });
      } else {
        res.send({
          status: false,
          status_code: 200,
          status_message: 'Order not found with username: ' + username
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        status_code: 500,
        status_message: err.errmsg
      });
    });
};

exports.createOrder = (req, res) => {
  // console.log(req, res);
  const {
    title,
    address,
    user_owner,
    user_grabber,
    description,
    // status,
    price,
    tip
    // created_time,
    // updated_time
  } = req.body;
  let newOrder = new Order({
    title,
    address,
    user_owner,
    user_grabber,
    description,
    // status,
    price,
    tip
    // created_time,
    // updated_time
  });

  Order.init().then(() => {
    // avoid dup by wait until finish building index
    newOrder
      .save()
      .then(order => {
        res.send({
          status: true,
          status_code: 200,
          status_message: 'Succesfully created order',
          data: order
        });
      })
      .catch(err => {
        res.status(500).send({
          status: false,
          status_code: 500,
          status_message: err.message
        });
      });
  });
};
