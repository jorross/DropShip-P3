const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstname: String!
    lastname: String!
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
    date: String
    shipTo: String
    PaymentMethod: String
    amount: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    products: [Product]
    orders: [Order]
  }

  type Mutation {
    createOrder(product_id: ID!, user_id: ID!): Order
    addUser(firstname: String!, lastname: String!, email: String!, password: String!, admin: Boolean!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
