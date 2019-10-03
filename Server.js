require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
// const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
////////////////////////////////////
//   instantiate middleware    ////
//////////////////////////////////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan);
////////////////////////////////////
//  create database connection ////
//////////////////////////////////
var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME
});

////////////////////////////////////
////       api catalogue       ////
//////////////////////////////////

// index page

// fetch all products
app.get("/allPhones", (req, res) => {
  connection.query("SELECT * FROM Products", function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "failed to get all phones" });
    }
    res.json(data);
  });
});

// fetch specfic product based on item id
app.get("/product/:productid", (req, res) => {
  let item = req.params.productid;
  connection.query("SELECT * FROM Products WHERE ID = ?", [item], function(
    err,
    data
  ) {
    if (err) {
      res.status(500).json({ message: "error grabbing product" });
    }

    res.json(data);
  });
});

app.get("/contacts", (req, res) => {
  connection.query("SELECT * FROM Contacts", function(err, data) {
    if (err) {
      res.status(500).json({ message: "error grabbing product" });
    }

    res.json(data);
  });
});

app.post("/newContact", function(req, res) {
  console.log(req.body);
  const address = req.body.address;
  const city = req.body.city;
  const zip = req.body.zip;
  const name = req.body.name;
  connection.query(
    "INSERT INTO Contacts (names , Adress , City , Zip) VALUES(?, ?, ?, ?)",
    [name, address, city, zip],
    function(err, data) {
      if (err) {
        res.status(500).json({ message: "error making new contact" });
      }
      //created
      res.status(202).send("");
    }
  );
});

app.delete("/deleteContact", function(req, res) {
  let id = req.body.id;
  console.log(id);
  connection.query("DELETE FROM Contacts WHERE ID = ?", [id], function(
    err,
    data
  ) {
    if (err) {
      res.status(500).json({ message: "error deleting new contact" });
    }
    res.status(204).send("");
  });
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./Client/public/index.html"));
});

////////////////////////////////////
/////       Launch Server      ////
//////////////////////////////////
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}!`);
});
