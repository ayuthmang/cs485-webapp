const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const encryptPassword = password => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const isMatchPassword = (inputPass, dbPass) => {
  return bcrypt.compareSync(inputPass, dbPass);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.getUserByUsername(username).then(data => {
    if (data.status) {
      if (isMatchPassword(password, data.data[0].password)) {
        res.send({
          status: true,
          status_code: 200,
          status_message: 'Login succeed'
        });
      } else {
        res.send({
          status: false,
          status_code: 200,
          status_message: 'Incorrect password'
        });
      }
    }
  });
};
