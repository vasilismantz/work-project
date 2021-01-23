import gql from "graphql-tag";

import { categoryFields, userFields, taskFields } from "../fragments";

export const GET_CATEGORY = gql`
  query GET_CATEGORY($id: ID!, $withUser: Boolean = false) {
    category(id: $id) {
      ...categoryFields
      user @include(if: $withUser) {
        ...userFields
      }
    }
  }
  ${categoryFields}
  ${userFields}
`;

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES($withUser: Boolean = false) {
    categories {
      ...categoryFields
      user @include(if: $withUser) {
        ...userFields
      }
    }
  }
  ${categoryFields}
  ${userFields}
`;

export const GET_CATEGORY_BY_NAME = gql`
  query GET_CATEGORY_BY_NAME($name: String, $withTasks: Boolean = false) {
    categoryByName(name: $name) {
      ...categoryFields
      tasks @include(if: $withTasks) {
        ...taskFields
      }
    }
  }
  ${categoryFields}
  ${taskFields}
`;
