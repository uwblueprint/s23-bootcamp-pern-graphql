import { gql } from "apollo-server-express";

const userType = gql`
  enum Role {
    ADMIN
    REGULAR
  }

  type User {
    id: ID!
    email: String
    password: String
    role: Role
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    createUser(email: String!, password: String!, role: Role!): User
    updateUser(id: ID!, email: String, password: String, role: Role): User
    deleteUser(id: ID!): ID
  }
`

export default userType
