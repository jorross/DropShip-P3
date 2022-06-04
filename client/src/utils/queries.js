import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    User {
      _id
      email
      admin
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query products {
    Product {
      _id
      name
      stock
      price
    }
  }
`;

// returns to home screen
export const QUERY_ORDERS = gql`
  query orders($_id: String) {
    orders(_id: $_id) {
      _id
      product_id
      user_id
      total
    }
  }
`;
