const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
  }
});

const Product = model("Product", productSchema);

module.exports = Product;
