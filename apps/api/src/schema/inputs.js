import { gql } from "apollo-server";

export default gql`
  input AddUserInput {
    name: String!
    email: EmailAddress!
    password: String!
  }

  input LoginUserInput {
    email: EmailAddress!
    password: String!
  }

  input AddProjectInput {
    name: String!
    color: String!
  }

  input UpdateProjectInput {
    name: String
    color: String
  }

  input AddTaskInput {
    name: String!
    date: DateTime!
    isArchived: Boolean!
    projectId: ID
  }

  input UpdateTaskInput {
    name: String
    date: DateTime
    isArchived: Boolean
    projectId: ID
  }
`;
