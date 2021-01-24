import gql from "graphql-tag";

export const userFields = gql`
  fragment userFields on User {
    id
    name
    email
  }
`;

export const categoryFields = gql`
  fragment categoryFields on Category {
    id
    name
    color
  }
`;

export const taskFields = gql`
  fragment taskFields on Task {
    id
    name
    date
    isArchived
  }
`;
