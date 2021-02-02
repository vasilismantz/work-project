import gql from "graphql-tag";

import { projectFields, userFields, taskFields } from "../fragments";

export const GET_PROJECT = gql`
  query GET_PROJECT($id: ID!, $withUser: Boolean = false) {
    project(id: $id) {
      ...projectFields
      user @include(if: $withUser) {
        ...userFields
      }
    }
  }
  ${projectFields}
  ${userFields}
`;

export const GET_PROJECTS = gql`
  query GET_PROJECTS($withUser: Boolean = false) {
    projects {
      ...projectFields
      user @include(if: $withUser) {
        ...userFields
      }
    }
  }
  ${projectFields}
  ${userFields}
`;
