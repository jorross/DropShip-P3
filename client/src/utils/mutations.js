import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($product_id: String!, $user_id: String!) {
    createOrder(product_id: $product_id, user_id: $user_id) {
      _id
      product_id
      user_id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
