// express
const express = require('express');

// jwt
const jwt = require('jsonwebtoken');

// bcrypt
const bcrypt = require('bcryptjs');

// const secretKey
const secretKey = "123456789xfs"
// define app express
const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to Api"
    });
});

// posts protetto da auth
app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "Post Created",
                authData
            });
        }
    });
});

// login
app.post('/api/login', (req, res) => {
    // User
    const user = {
        id: 1,
        username: 'userdemo',
        email: 'test@test.com'
    }

    jwt.sign({user}, secretKey, {expiresIn: '60m'}, (err, token) => {
        res.json({
            token
        });
    });
});


// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space (because the token come after bearheader, so is posion 1 from zero)
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }    
}


// run server
app.listen(5000, () => console.log("Server started on port 5000"));


