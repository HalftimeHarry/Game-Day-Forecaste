const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',  // or '127.0.0.1' or the name of your database container
  user: 'root',
  password: '123456',
  port: 3306
});

//Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connected...');
});


app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE smash_db';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('database created...');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
