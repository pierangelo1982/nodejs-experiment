// express
const express = require('express');

const router = express.Router();

// mongoose
const mongoose = require("mongoose");

// bcrypt
const bcrypt = require("bcryptjs");

// User model
const User = require("./models/user");

// see all record
router.get("/users", (req, res, next) => {
    User.find()
        .select()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        email: doc.email,
                        password: doc.password,
                        _id: doc._id
                    }
                })
            }
            res.status(200).json(response);
            console.log(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          })
    });


// create
router.post("/signup", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "email exist!"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: "User create!"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
});


// delete
router.delete("/delete/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "User deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


router.get("/login", (req, res) => {
    res.json({
        message: "Welcome to Login"
    });
});

// export router
module.exports = router;
