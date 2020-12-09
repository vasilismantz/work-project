import { gql } from "apollo-server";

export default gql`
  type User implements Node {
    id: ID!
    name: String!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type AuthPayload {
    token: String!
    me: User!
  }

  type Query {
    me: User!
    user(id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    register(input: AddUserInput!): AuthPayload!
    login(input: LoginUserInput!): AuthPayload!
  }
`;
