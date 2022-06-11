import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    User {
      _id
      username
      email
      admin
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
  query Orders{
    orders{
      _id
      date
      name
      shipTo
      PaymentMethod
      amount
    }
  }
`;
