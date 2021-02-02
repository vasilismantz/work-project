import gql from "graphql-tag";

import { taskFields, userFields, projectFields } from "../fragments";

export const GET_TASK = gql`
  query GET_TASK(
    $id: ID!
    $withUser: Boolean = false
    $withProject: Boolean = false
  ) {
    task(id: $id) {
      ...taskFields
      user @include(if: $withUser) {
        ...userFields
      }
      project @include(if: $withProject) {
        ...projectFields
      }
    }
  }
  ${taskFields}
  ${userFields}
  ${projectFields}
`;

export const GET_TASKS = gql`
  query GET_TASKS(
    $isArchived: Boolean!
    $projectId: ID
    $date: DateTime
    $withUser: Boolean = false
    $withProject: Boolean = false
  ) {
    tasks(isArchived: $isArchived, projectId: $projectId, date: $date) {
      ...taskFields
      user @include(if: $withUser) {
        ...userFields
      }
      project @include(if: $withProject) {
        ...projectFields
      }
    }
  }
  ${taskFields}
  ${userFields}
  ${projectFields}
`;
