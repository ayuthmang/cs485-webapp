const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    unique: false,
    required: [true, 'Firstname is required']
  },
  lastname: {
    type: String,
    trim: true,
    unique: false,
    required: [true, 'Lastname is required']
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email is required']
  },
  avatar_url: {
    type: String,
    trim: true,
    default: null
  },
  created_time: {
    type: Date,
    default: Date.now()
  },
  updated_time: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'reject'],
    default: 'pending'
  }
});

const User = (module.exports = mongoose.model('Users', UserSchema, 'Users'));
module.exports.getUserByUsername = username => {
  var userProjection = {
    __v: false,
    _id: false
  };
  return User.find({ username: username }, userProjection)
    .then(user => {
      if (user.length === 1) {
        return {
          status: true,
          status_code: 200,
          status_message: 'succeed',
          data: user
        };
      } else {
        return {
          status: false,
          status_code: 200,
          status_message: 'Username not found with username: ' + username
        };
      }
    })
    .catch(err => {
      return {
        status: false,
        status_code: 500,
        status_message: err.errmsg
      };
    });
};
