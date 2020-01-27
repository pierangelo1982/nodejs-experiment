var mysql = require('mysql');


const connection = new mysql.createConnection({
    host: '192.168.60.1',
    user: 'demo',
    password: 'demo'
    //database: 'todoapp'
});

const pool  = mysql.createPool({
    connectionLimit : 10,
    host: '192.168.60.1',
    user: 'demo',
    password: 'demo'
  });

  // export router
module.exports = connection;

module.exports = pool;
