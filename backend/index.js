const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',  // or '127.0.0.1'
  user: 'root',
  password: '',
  port: 3306
});

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',  // or '127.0.0.1' or the name of your database container
  user: 'root',
  password: '',
  database: 'your_database_name',  // make sure this database exists
  port: 3306
});

app.get('/api/teams', (req, res) => {
  connection.query('SELECT * FROM teams', (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Database error' });
      throw err;
    }
    res.json(rows);
  });
});

app.get('/api/odds', (req, res) => {
  connection.query('SELECT * FROM odds', (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Database error' });
      throw err;
    }
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
