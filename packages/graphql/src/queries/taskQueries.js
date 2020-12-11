import gql from "graphql-tag";

import { taskFields } from "../fragments";

export const GET_TASK = gql`
  query GET_TASK($id: ID!) {
    task(id: $id) {
      ...taskFields
    }
  }
  ${taskFields}
`;

export const GET_TASKS = gql`
  query GET_TASKS {
    tasks {
      ...taskFields
    }
  }
  ${taskFields}
`;
