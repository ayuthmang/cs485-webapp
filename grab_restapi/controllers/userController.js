const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Retrieve and return all Users from the database.
exports.getUsers = (req, res) => {
  var userProjection = {
    __v: false,
    _id: false,
    password: false
  };
  User.find({}, userProjection)
    .then(users => {
      res.send({
        status: true,
        status_code: 200,
        status_message: 'succeed',
        data: users
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

exports.getUsersByUsername = (req, res) => {
  const { username } = req.params;
  var userProjection = {
    __v: false,
    _id: false,
    password: false
  };
  // res.json(req.params);
  User.find({ username: username }, userProjection)
    .then(user => {
      if (user.legnth === 1) {
        res.send({
          status: true,
          status_code: 200,
          status_message: 'succeed',
          data: user
        });
      } else {
        res.send({
          status: false,
          status_code: 200,
          status_message: 'Username not found with username: ' + username
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

exports.createUser = (req, res) => {
  const params = { ...req.body };
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(params.password, salt, (err, hash) => {
      if (err)
        res
          .status(400)
          .json({ errors: { global: 'Failed to register user: ' + err } });

      let newUser = new User({
        ...params,
        password: hash,
        status: 'approved'
      });
      // console.log(hash);

      User.init().then(() => {
        // avoid dup by wait until finish building index
        newUser
          .save()
          .then(user => {
            res.send({
              status: true,
              status_code: 200,
              status_message: 'Succesfully created user',
              data: user
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
    });
  });
};

// Delete is just set status to 'reject'
exports.deleteUser = (req, res) => {
  const { username } = req.body;

  User.findOneAndUpdate({ username: username }, { $set: { status: 'reject' } })
    .then(user => {
      console.log('user');
      console.log(user);
      if (!user) {
        res.status(404).send({
          status: false,
          status_code: 500,
          status_message: 'Username not found with username: ' + username
        });
      }
      res.send({
        status: true,
        status_code: 200,
        status_message: 'Succesfully mark user as rejected'
      });
    })
    .catch(err => {
      console.log('err');
      console.log(err);
      res.send(500).send({
        status: false,
        status_code: 500,
        status_message: err.errmsg
      });
    });
};

// CAUTION: This is not filtering every params, it's use for test only
exports.updateUser = (req, res) => {
  const { username, ...params } = req.body;

  User.findOneAndUpdate({ username: username }, { $set: { ...params } })
    .then(user => {
      if (!user) {
        res.status(404).send({
          status: false,
          status_code: 500,
          status_message: 'Username not found with username: ' + username
        });
      }
      res.send({
        status: true,
        status_code: 200,
        status_message: 'Succesfully updated user'
      });
    })
    .catch(err => {
      res.send(500).send({
        status: false,
        status_code: 500,
        status_message: err.errmsg
      });
    });
};
