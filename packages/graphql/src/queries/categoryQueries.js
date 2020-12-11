import gql from "graphql-tag";

import { categoryFields } from "../fragments";

export const GET_CATEGORY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id) {
      ...categoryFields
    }
  }
  ${categoryFields}
`;

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      ...categoryFields
    }
  }
  ${categoryFields}
`;
