const db = require('../config/connection');
const { Product } = require('../models');
const { User } = require('../models');

const productData = require('./products.json');
const userData = require('./users.json');


db.once('open', async () => {
  await Product.deleteMany({});

  const products = await Product.insertMany(productData);

  console.log('Products seeded!');

  await User.deleteMany({});

  const user = await User.insertMany(userData);

  console.log('Users seeded!');

  process.exit(0);
});
