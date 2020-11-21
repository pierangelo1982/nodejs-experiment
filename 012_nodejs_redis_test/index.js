var express = require('express');
var Redis = require('ioredis');

const redis = new Redis();

var app = express();

app.get('/', function(req, res) {
    
    redis.lrange("heroes", 0, -1).then( rows => {
        res.send(rows);
    });
})

app.get('/save/:name/:alias', function (req, res) {

    var data = {
        name: req.params.name,
        alias: req.params.alias
    }

    redis.lpush("heroes", JSON.stringify(data) ).then( () => {
        res.send(true);
    });
})

app.get("/delete", function(req, res) {
    redis.del("heroes").then( () => {
        res.send(true)
    })
})

app.listen( 3000, () => {
    console.log("Server on localhost:3000");
})