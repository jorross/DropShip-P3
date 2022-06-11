const { User, Product, Order } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    products: async () => {
      return Product.find({});
    },
    orders: async () => {
      return Order.find({});
    },
  },
  Mutation: {
    createOrder: async (parent, args, context) => {
      const newOrder = await Order.create(args);
      return newOrder;
    },
  },
};
// fix me

module.exports = resolvers;
