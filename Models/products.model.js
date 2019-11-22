const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  URL: { type: String, required: true },
  Color: { type: String, required: true },
  Maker: { type: String, required: true },
  Names: { type: String, rquired: true },
  Description: { type: String, required: true },
  Price: { type: Number, required: true }
});
const Products = mongoose.model("Products", productSchema, "phones");
module.exports = Products;
