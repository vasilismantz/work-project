import gql from "graphql-tag";

import { taskFields, categoryFields } from "../fragments";

export const ADD_TASK = gql`
  mutation ADD_TASK(
    $addTaskInput: AddTaskInput!
    $withCategory: Boolean = false
  ) {
    addTask(input: $addTaskInput) {
      ...taskFields
      category @include(if: $withCategory) {
        ...categoryFields
      }
    }
  }
  ${taskFields}
  ${categoryFields}
`;

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK(
    $id: ID!
    $updateTaskInput: UpdateTaskInput!
    $withCategory: Boolean = false
  ) {
    updateTask(id: $id, input: $updateTaskInput) {
      ...taskFields
      category @include(if: $withCategory) {
        ...categoryFields
      }
    }
  }
  ${taskFields}
  ${categoryFields}
`;

export const REMOVE_TASK = gql`
  mutation REMOVE_TASK($id: ID!) {
    removeTask(id: $id) {
      ...taskFields
    }
  }
  ${taskFields}
`;
