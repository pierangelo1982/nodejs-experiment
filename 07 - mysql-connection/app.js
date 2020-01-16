const http = require('http');

const express = require('express');

const app = express();

const os = require('os');

const hostname = os.hostname();
const port = 3000;

// mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.60.1',
    user: 'demo',
    password: 'demo'
    //database: 'todoapp'
});

app.get('/', function (req, res) {
    res.send(`Host: ${os.hostname()}\n`);
});

app.get('/db', function (req, res) {

    connection.connect(function(err) {
        if (err) throw err;
            res.send(`DB connesso su host: ${os.hostname()}\n`);
    });

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});