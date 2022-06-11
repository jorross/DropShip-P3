const { User, Product, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
    addUser: async (parent, { firstname, lastname, email, password, admin }) => {
      const user = await User.create({ firstname, lastname, email, password, admin });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // loginUser: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError("No user found with this email address");
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect credentials");
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },
  },
};
// fix me

module.exports = resolvers;
