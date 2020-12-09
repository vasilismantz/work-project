import gql from "graphql-tag";

import { userFields } from "../fragments";

export const REGISTER = gql`
  mutation REGISTER($addUserInput: AddUserInput!) {
    register(input: $addUserInput) {
      token
      me {
        ...userFields
      }
    }
  }
  ${userFields}
`;

export const LOGIN = gql`
  mutation LOGIN($loginUserInput: LoginUserInput!) {
    login(input: $loginUserInput) {
      token
      me {
        ...userFields
      }
    }
  }
  ${userFields}
`;
