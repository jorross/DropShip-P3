import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstname
      lastname
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
      image
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
