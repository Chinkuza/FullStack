require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
let uri = process.env.ATLAS_URI;

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', ApiRouter);
// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  // uri = "mongodb://localhost/userdb"
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}
// connection to database
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) return console.log(err || "connected to mongoDB");
  }
);
// Creating live connection to reactjs app

// routes require
const Products = require("./routes/Products");
const Contacts = require("./routes/Contacts");
const usersRoutes = require("./routes");

app.use("/products", Products);
app.use("/contacts", Contacts);

app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});

app.use("/api/users", usersRoutes);

// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.get("*", function(req, res) {
    res.send("currently serving fallback url, please check your path");
  });
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
