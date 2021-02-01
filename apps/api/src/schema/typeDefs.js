import { gql } from "apollo-server";

export default gql`
  type User implements Node {
    id: ID!
    name: String!
    email: EmailAddress!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Category implements Node {
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
    category: Category!
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
    category(id: ID!): Category!
    categoryByName(name: String): Category
    categories: [Category!]!
    task(id: ID!): Task!
    tasks(isArchived: Boolean!, categoryId: ID, date: DateTime): [Task!]!
  }

  type Mutation {
    register(input: AddUserInput!): AuthPayload!
    login(input: LoginUserInput!): AuthPayload!
    addCategory(input: AddCategoryInput!): Category!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category!
    removeCategory(id: ID!): Category!
    addTask(input: AddTaskInput!): Task!
    updateTask(id: ID!, input: UpdateTaskInput!): Task!
    removeTask(id: ID!): Task!
  }
`;
