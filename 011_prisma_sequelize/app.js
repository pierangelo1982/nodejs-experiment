require('dotenv').config();

const express = require('express');
var app = express();

const bodyParser = require('body-parser');

const hostname = process.env.HOST;
const port = process.env.PORT;

const sequelize = require('./database')

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

app.get('/test', async function(req, res, next) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return res.status(200).json({
            message: "Connection has been established successfully."
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return res.status(200).json({
            message: "Unable to connect to the database:"
        })
    }
})

app.get('/create', async function(req, res, next) {
    await prisma.users.create({
        data: {
            firstName: "Napoleone",
            lastName: "test@test.com",
        }
    }).then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    })
})


app.get('/', async function(req, res, next) {
    const allUsers = await prisma.users.findMany()
    console.log(allUsers)
    res.status(200).json({
        users: allUsers
    })
})

app.listen(port, () => {
    console.log(`Listening on ${hostname}:${port}`)
})
