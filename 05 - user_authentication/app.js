
// load secret data
const secretConfig = require('./secret.json');

// bcrypt
const bcrypt = require('bcryptjs');



// create the server with express
var express = require('express');
var app = express();

// includer router
var routes = require('./router');
app.use('/api', routes)


// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000')
})