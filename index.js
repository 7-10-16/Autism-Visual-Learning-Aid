require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require("cors");
app.use(cors());app.use(express.json());
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
    db.query('INSERT INTO user (user_fname, user_age) VALUES (?,?)',
      [name, age], (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.json(req.body);
        }    
      });
    });

  //Posting photo object properties
  app.post('/apipost', (req, res) => {
    const name = req.body.name;
    const img = req.body.img;
    const category = req.body.category;
    const saveToDb = () => {
      connection.query('INSERT INTO item (item_name, item_img, category_id) VALUES (?,?,?)',
      [name, img, category], (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.status(201).json(req.body);
        }    
      });
    }
    connection.query("SELECT * FROM item",(err, result) => {
      if (err) {
        console.log(err)
      } else {
        const urls = result.map(item => {return item.item_img});
        if(!urls.includes(img)) {
          saveToDb()
        }
      }
    });
    });

  //Pictures fetched by the Pexels API
  app.get('/apiget', (req, res) => {
    connection.query("SELECT * FROM item",(err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
     });
  });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })