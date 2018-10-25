// mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection to mongodb url
const mongohost = 'mongodb://127.0.0.1:27017';

// create a new MongoClient
const client = new MongoClient(mongohost);

// databse name
const dbName = 'demo';

// connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected succesfully to server db");

    // passo db
    const db = client.db(dbName);
    const collection = db.collection('agenda');

    console.log("test", collection.find());
});