import gql from "graphql-tag";

import { projectFields } from "../fragments";

export const ADD_PROJECT = gql`
  mutation ADD_PROJECT($addProjectInput: AddProjectInput!) {
    addProject(input: $addProjectInput) {
      ...projectFields
    }
  }
  ${projectFields}
`;

export const UPDATE_PROJECT = gql`
  mutation UPDATE_PROJECT($id: ID!, $updateProjectInput: UpdateProjectInput!) {
    updateProject(id: $id, input: $updateProjectInput) {
      ...projectFields
    }
  }
  ${projectFields}
`;

export const REMOVE_PROJECT = gql`
  mutation REMOVE_PROJECT($id: ID!) {
    removeProject(id: $id) {
      ...projectFields
    }
  }
  ${projectFields}
`;
