import { gql } from "apollo-server";

export default gql`
  type User implements Node {
    id: ID!
    name: String!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Project implements Node {
    id: ID!
    name: String!
    color: String!
    user: User!
    tasks: [Task]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Task implements Node {
    id: ID!
    name: String!
    date: DateTime!
    isArchived: Boolean!
    user: User!
    project: Project!
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
    project(id: ID!): Project!
    projectByName(name: String): Project
    projects: [Project!]!
    task(id: ID!): Task!
    tasks(isArchived: Boolean!, projectId: ID, date: DateTime): [Task!]!
  }

  type Mutation {
    register(input: AddUserInput!): AuthPayload!
    login(input: LoginUserInput!): AuthPayload!
    addProject(input: AddProjectInput!): Project!
    updateProject(id: ID!, input: UpdateProjectInput!): Project!
    removeProject(id: ID!): Project!
    addTask(input: AddTaskInput!): Task!
    updateTask(id: ID!, input: UpdateTaskInput!): Task!
    removeTask(id: ID!): Task!
  }
`;
