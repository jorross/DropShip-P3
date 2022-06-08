const db = require("../config/connection");
const { Product } = require("../models");
const { User } = require("../models");
const { Order } = require("../models");

const productData = require("./productsData.json");
const userData = require("./usersData.json");
const orderData = require("./ordersData.json");

db.once("open", async () => {
  await Product.deleteMany({});

  const products = await Product.insertMany(productData);

  console.log("Products seeded!");

  await User.deleteMany({});

  const user = await User.insertMany(userData);

  console.log("Users seeded!");

  await Order.deleteMany({});

  const order = await Order.insertMany(orderData);

  console.log("Orders seeded!");

  process.exit(0);
});
