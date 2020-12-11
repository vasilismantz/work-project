import gql from "graphql-tag";

import { taskFields } from "../fragments";

export const ADD_TASK = gql`
  mutation ADD_TASK($addTaskInput: AddTaskInput!) {
    addTask(input: $addTaskInput) {
      ...taskFields
    }
  }
  ${taskFields}
`;

export const UPDATE_TASK = gql`
  mutation UPDATE_TASK($id: ID!, $updateTaskInput: UpdateTaskInput!) {
    updateTask(id: $id, input: $updateTaskInput) {
      ...taskFields
    }
  }
  ${taskFields}
`;

export const REMOVE_TASK = gql`
  mutation REMOVE_TASK($id: ID!) {
    removeTask(id: $id) {
      ...taskFields
    }
  }
  ${taskFields}
`;
