// express
const express = require('express');

const router = express.Router();

// mongoose
const mongoose = require("mongoose");

// bcrypt
const bcrypt = require("bcryptjs");

// User model
const User = require("./models/user");


router.get("/login", (req, res) => {
    res.json({
        message: "Welcome to Login"
    });
});

// export router
module.exports = router;
