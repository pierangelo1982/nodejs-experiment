
// load secret data
const secretConfig = require('./secret.json');
// bcrypt
const bcrypt = require('bcryptjs');

// body parser
const bodyParser = require("body-parser");


// mongoose
const mongoose = require("mongoose");

// create the server with express
var express = require('express');
var app = express();

// connection to mongodb url
const mongohost = 'mongodb://127.0.0.1:27017/account';

mongoose.connect(mongohost,{
    useCreateIndex: true,
    useNewUrlParser: true
  });
mongoose.Promise = global.Promise;

// includer router
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


var routes = require('./router');
app.use('/api', routes);

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})