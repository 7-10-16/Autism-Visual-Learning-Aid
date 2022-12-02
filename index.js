require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 19007

const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect(function(err) {
    if (err) throw err;
    console.log("Succesfully connected to PlanetScale!");
  });

  //Route example of getting all users
  app.get('/users', (req, res) => {
    connection.query("SELECT * FROM user",(err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    });
  });

  //Route example of adding a user (Does not work)
  app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    connection.query('INSERT INTO user (user_fname, user_age) VALUES (?,?)',
      [name, age], (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.json(req.body);
        }    
      });
    });

  //Create Route for User
  app.post('/createuser', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    connection.query('INSERT INTO `user` (user_fname, user_lname, user_age, user_email, user_password) VALUES (?,?,?,?,?)',
      [fname, lname, age, email, password], (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.json(req.body);
        }
      });
  });

  app.get('/login', (req, res) => {

    const email = req.query.user_email; //Variables we set from parameters declared
    const password = req.query.user_password;
    connection.query("SELECT user_email, user_password FROM user WHERE ? AND ?",
    [email, password], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
app.listen(port, () => {
    console.log(`Example app listening`)
  })
