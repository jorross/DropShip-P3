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
  user_email: {
    type: String,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
