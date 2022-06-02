const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
