import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstname
      lastname
      email
      admin
      orders
    }
  }
`;

export const QUERY_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      _id
      firstname
      lastname
      email
      password
      admin
      orders
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query Products {
    products {
      _id
      name
      stock
      price
    }
  }
`;

export const QUERY_ORDERS = gql`
  query Orders {
    orders {
      _id
      name
      date
      shipTo
      PaymentMethod
      amount
    }
  }
`;
