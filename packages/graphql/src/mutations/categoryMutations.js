import gql from "graphql-tag";

import { categoryFields } from "../fragments";

export const ADD_CATEGORY = gql`
  mutation ADD_CATEGORY($addCategoryInput: AddCategoryInput!) {
    addCategory(input: $addCategoryInput) {
      ...categoryFields
    }
  }
  ${categoryFields}
`;

export const UPDATE_CATEGORY = gql`
  mutation UPDATE_CATEGORY(
    $id: ID!
    $updateCategoryInput: UpdateCategoryInput!
  ) {
    updateCategory(id: $id, input: $updateCategoryInput) {
      ...categoryFields
    }
  }
  ${categoryFields}
`;

export const REMOVE_CATEGORY = gql`
  mutation REMOVE_CATEGORY($id: ID!) {
    removeCategory(id: $id) {
      ...categoryFields
    }
  }
  ${categoryFields}
`;
