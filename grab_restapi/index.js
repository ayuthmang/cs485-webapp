var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-wwwform-urlencoded

const config = require('./config/database');
const userModel = require('./models/userModel');
var userRouter = require('./routes/userRouter');

userModel.init();
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', () => {
  console.log('Database error');
});

// REST for users
app.use('/api', userRouter);

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      result: false,
      status_code: 404,
      status_message: 'Request not found'
    })
  );
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});
