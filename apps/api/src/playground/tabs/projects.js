import { print } from "graphql";
import { gql } from "apollo-server";
import {
  GET_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "@work-project/graphql";

const query = gql`
  ${GET_PROJECT}
  ${GET_PROJECTS}
  ${ADD_PROJECT}
  ${UPDATE_PROJECT}
  ${REMOVE_PROJECT}
`;

const variables = {
  id: "1",
  withUser: true,
  name: "Groceries",
  addProjectInput: {
    name: "Groceries",
    color: "Green",
  },
  updateProjectInput: {
    name: "Alcohol",
    color: "Orange",
  },
};

const headers = {
  Authorization: "Bearer xyz",
};

export default {
  endpoint: "/",
  query: print(query),
  name: "projects",
  variables: JSON.stringify(variables, null, "\t"),
  headers,
};
