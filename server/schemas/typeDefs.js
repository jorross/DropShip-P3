const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    admin: Boolean!
    orders: [Order]!
  }

  type Product {
    _id: ID!
    name: String!
    stock: Int
    price: Int
  }

  type Order {
    _id: ID!
    user_email: String!
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
    user(email: String!): User
    products: [Product]
    orders: [Order]
  }

  type Mutation {
    createOrder(product_id: ID!, user_id: ID!): Order
    addUser(firstname: String!, lastname: String!, email: String!, password: String!, admin: Boolean!): Auth
    login(email: String!, password: String!): Auth
    addOrder(_id: ID!, name: String!, user_email: String): Order
  }
`;

module.exports = typeDefs;
