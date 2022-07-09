const mysql = require('mysql');

const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
  });
  
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conn;