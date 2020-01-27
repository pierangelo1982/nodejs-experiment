const http = require('http');

const express = require('express');

const app = express();

const os = require('os');

const hostname = os.hostname();
const port = 3000;

const pool = require('./database');
const connection = require('./database');


app.get('/', function (req, res) {
    res.send(`Host: ${os.hostname()}\n`);
});

app.get('/db', function (req, res) {        
        
    pool.getConnection(function(err, connection) {
        if (err) {
            res.send(`DB NON CONNESSO: ${os.hostname()}\n`);
        } // not connected!
        else {
            // Use the connection
            connection.query('select * from information_schema.processlist;', function (error, results, fields) {
                // When done with the connection, release it.
                connection.release();
    
                res.send(`DB CONNESSO: ${os.hostname()}\n`);
                // Handle error after the release.
                if (error) {
                    res.send(`DB NON CONNESSO: ${os.hostname()}\n`);
                    // Don't use the connection here, it has been returned to the pool.
                }
            });
        }
      });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});