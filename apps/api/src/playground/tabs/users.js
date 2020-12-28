import { print } from "graphql";
import { gql } from "apollo-server";
import {
  LOGIN,
  REGISTER,
  GET_ME,
  GET_USER,
  GET_USERS,
} from "@work-project/graphql";

const query = gql`
  ${LOGIN}
  ${REGISTER}
  ${GET_ME}
  ${GET_USER}
  ${GET_USERS}
`;

const variables = {
  id: "1",
  email: "alfred@google.com",
  addUserInput: {
    name: "Bill",
    email: "bill@google.com",
    password: "123456",
  },
  loginUserInput: {
    email: "bill@google.com",
    password: "123456",
  },
};

const headers = {
  Authorization: "Bearer xyz",
};

export default {
  endpoint: "/",
  query: print(query),
  name: "users",
  variables: JSON.stringify(variables, null, "\t"),
  headers,
};
