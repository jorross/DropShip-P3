const { User, Product, Order } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    products: async () => {
      return Product.find({});
    },
    orders: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
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
