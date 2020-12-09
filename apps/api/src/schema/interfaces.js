import { gql } from "apollo-server";

export default gql`
  interface Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;
