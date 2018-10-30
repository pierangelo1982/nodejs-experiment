// mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection to mongodb url
const mongohost = 'mongodb://127.0.0.1:27017';

// create a new MongoClient
const client = new MongoClient(mongohost);

// database name
const dbName = 'demo';

// connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected succesfully to server db");

    // passo db
    const db = client.db(dbName);
    const collection = db.collection('agenda');
    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log("trovati i seguenti record");
        console.log(docs);
        for (i = 0; i < docs.length; i++) {
            console.log(docs[i].nome + " " + docs[i].cognome + " " + docs[i].nazione);
        }
    });
});