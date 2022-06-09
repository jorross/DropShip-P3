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
    loginUser: async (parent, { email, password }) => {
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
  },
};
// fix me

module.exports = resolvers;
