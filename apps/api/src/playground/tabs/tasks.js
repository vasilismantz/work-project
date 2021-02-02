import { print } from "graphql";
import { gql } from "apollo-server";
import {
  GET_TASK,
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
} from "@work-project/graphql";

const query = gql`
  ${GET_TASK}
  ${GET_TASKS}
  ${ADD_TASK}
  ${UPDATE_TASK}
  ${REMOVE_TASK}
`;

const variables = {
  id: "1",
  withUser: true,
  withProject: true,
  addTaskInput: {
    name: "Throw trash",
    date: "2020-10-09T00:00:00Z",
    projectId: "1",
  },
  updateTaskInput: {
    name: "Clean dishes",
    date: "2020-10-09T23:00:00Z",
    projectId: "1",
  },
};

const headers = {
  Authorization: "Bearer xyz",
};

export default {
  endpoint: "/",
  query: print(query),
  name: "tasks",
  variables: JSON.stringify(variables, null, "\t"),
  headers,
};
