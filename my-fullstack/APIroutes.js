require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
// const morgan = require("morgan");
const app = express();
const PORT = 5000;

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
  user: "root",
  password: "password",
  database: "HTMLphones"
});

////////////////////////////////////
////       api catalogue       ////
//////////////////////////////////

// index page
app.get("/", function(req, res) {
  res.send("Hello World");
});

// fetch all products
app.get("/allPhones", (req, res) => {
  connection.query("SELECT * FROM Phones", function(err, data) {
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
  connection.query("SELECT * FROM products WHERE item_id = ?", [item], function(
    err,
    data
  ) {
    if (err) {
      res.status(500).json({ message: "error grabbing product" });
    }

    res.json(data);
  });
});

app.get("/invoiceprice/:productid/:quant", (req, res) => {
  let item = req.params.productid;
  let quantity = req.params.quant;
  connection.query(
    "SELECT ? as item_id, product_name, (price * ?)AS invoice_price FROM products WHERE item_id = ?",
    [item, quantity, item],
    (err, data) => {
      res.json(data);
    }
  );
});
/*
// fetch specific product and calculate invoice price
app.get('/invoiceprice/:productid/:quant', (req, res) => {  
  
//   this api endpoint retrieves a product based on item id
//   and multiplies the quantity ordered (req.params.quant) by
//   the price for the product. The object is updated with invoice
//   price and returned 
  
})
*/
// Purchase the desired quantity of the desired item
app.put("/makepurchase", (req, res) => {
  let item = req.body.item;
  let quantity = req.body.quant;
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, item],
    function(err, data) {
      res.json(data);
    }
  );
});

////////////////////////////////////
/////       Launch Server      ////
//////////////////////////////////
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}!`);
});
