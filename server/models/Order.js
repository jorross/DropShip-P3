const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  shipTo: {
    type: String,
  },
  PaymentMethod: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
