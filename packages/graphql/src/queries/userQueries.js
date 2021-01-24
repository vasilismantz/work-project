import gql from "graphql-tag";

import { userFields } from "../fragments";

export const GET_ME = gql`
  query GET_ME {
    me {
      ...userFields
    }
  }
  ${userFields}
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const GET_USER = gql`
  query GET_USER($id: ID!) {
    user(id: $id) {
      ...userFields
    }
  }
  ${userFields}
`;

export const GET_USERS = gql`
  query GET_USERS {
    users {
      ...userFields
    }
  }
  ${userFields}
`;
