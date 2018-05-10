const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Retrieve and return all Users from the database.
exports.users = (req, res) => {
  var userProjection = {
    __v: false,
    _id: false,
    password: false
  };
  User.find({}, userProjection)
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).send({
        errors: {
          global: err.message || 'Some error occurred while retrieving Users.'
        }
      });
    });
};
