const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const orderSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  }
});

const Order = model("Order", orderSchema);

module.exports = Order;
