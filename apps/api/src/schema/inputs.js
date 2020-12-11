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

  input AddCategoryInput {
    name: String!
    color: String!
  }
  
  input UpdateCategoryInput {
    name: String
    color: String
  }
`;
