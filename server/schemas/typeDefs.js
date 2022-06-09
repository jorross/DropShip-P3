const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
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
    product_id: ID!
    user_id: ID!
    shipTo: String!
    PaymentMethod: String!
    amount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    products: [Product]
    orders(_id: String): [Order]
  }

  type Mutation {
    createOrder(product_id: ID!, user_id: ID!): Order
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
