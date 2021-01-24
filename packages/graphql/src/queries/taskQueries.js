import gql from "graphql-tag";

import { taskFields, userFields, categoryFields } from "../fragments";

export const GET_TASK = gql`
  query GET_TASK(
    $id: ID!
    $withUser: Boolean = false
    $withCategory: Boolean = false
  ) {
    task(id: $id) {
      ...taskFields
      user @include(if: $withUser) {
        ...userFields
      }
      category @include(if: $withCategory) {
        ...categoryFields
      }
    }
  }
  ${taskFields}
  ${userFields}
  ${categoryFields}
`;

export const GET_TASKS = gql`
  query GET_TASKS(
    $isArchived: Boolean!
    $categoryId: ID
    $withUser: Boolean = false
    $withCategory: Boolean = false
  ) {
    tasks(isArchived: $isArchived, categoryId: $categoryId) {
      ...taskFields
      user @include(if: $withUser) {
        ...userFields
      }
      category @include(if: $withCategory) {
        ...categoryFields
      }
    }
  }
  ${taskFields}
  ${userFields}
  ${categoryFields}
`;
