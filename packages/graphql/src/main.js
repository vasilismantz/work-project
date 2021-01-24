export { userFields } from "./fragments";

export { categoryFields } from "./fragments";

export { taskFields } from "./fragments";

export {
  IS_LOGGED_IN,
  GET_ME,
  GET_USER,
  GET_USERS,
} from "./queries/userQueries";

export { GET_CATEGORY, GET_CATEGORIES } from "./queries/categoryQueries";

export { GET_TASK, GET_TASKS } from "./queries/taskQueries";

export { REGISTER, LOGIN } from "./mutations/userMutations";

export {
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  REMOVE_CATEGORY,
} from "./mutations/categoryMutations";

export { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from "./mutations/taskMutations";
