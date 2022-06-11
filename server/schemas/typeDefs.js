const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    admin: Boolean!
  }

  type Product {
    _id: ID!
    name: String!
    stock: Int
    price: Int
  }

  type Order {
    _id: ID!
    name: String!
    date: String!
    shipTo: String!
    PaymentMethod: String!
    amount: Int
  }

  type Query {
    users: [User]
    products: [Product]
    orders(_id: String): [Order]
  }

  type Mutation {
    createOrder(product_id: ID!, user_id: ID!): Order
  }
`;

module.exports = typeDefs;
