import gql from "graphql-tag";

import { taskFields, projectFields } from "../fragments";

export const ADD_TASK = gql`
  mutation ADD_TASK(
    $addTaskInput: AddTaskInput!
    $withProject: Boolean = false
  ) {
    addTask(input: $addTaskInput) {
      ...taskFields
      project @include(if: $withProject) {
        ...projectFields
      }
    }
  }
  ${taskFields}
  ${projectFields}
`;

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK(
    $id: ID!
    $updateTaskInput: UpdateTaskInput!
    $withProject: Boolean = false
  ) {
    updateTask(id: $id, input: $updateTaskInput) {
      ...taskFields
      project @include(if: $withProject) {
        ...projectFields
      }
    }
  }
  ${taskFields}
  ${projectFields}
`;

export const REMOVE_TASK = gql`
  mutation REMOVE_TASK($id: ID!) {
    removeTask(id: $id) {
      ...taskFields
    }
  }
  ${taskFields}
`;
