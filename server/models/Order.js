const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
