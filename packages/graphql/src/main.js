export { userFields } from "./fragments";

export { projectFields } from "./fragments";

export { taskFields } from "./fragments";

export {
  IS_LOGGED_IN,
  GET_ME,
  GET_USER,
  GET_USERS,
} from "./queries/userQueries";

export { GET_PROJECT, GET_PROJECTS } from "./queries/projectQueries";

export { GET_TASK, GET_TASKS } from "./queries/taskQueries";

export { REGISTER, LOGIN } from "./mutations/userMutations";

export {
  ADD_PROJECT,
  UPDATE_PROJECT,
  REMOVE_PROJECT,
} from "./mutations/projectMutations";

export { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from "./mutations/taskMutations";
