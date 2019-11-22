const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    Names: { type: String, required: true },
    Adress: { type: String, required: true },
    City: { type: String, required: true },
    Zip: { type: Number, rquired: true }
  },
  {
    timestamps: true
  }
);
const contacts = mongoose.model("contacts", contactSchema);
module.exports = contacts;
