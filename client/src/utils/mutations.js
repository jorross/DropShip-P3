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
