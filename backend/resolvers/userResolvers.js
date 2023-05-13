import { GraphQLError } from "graphql";
import userService from "../services/userService";

const userResolvers = {
    Query: {
      user: async (_parent, { id }) => {
        return await userService.getUser(id);
      },
      users: async () => {
        return await userService.getUsers();
      }
    },
    Mutation: {
      createUser: async (_parent, { email, password, role }) => {
        return await userService.createUser(email, password, role);
      },
      updateUser: async (_parent, { id, email, password, role }) => {
        return await userService.updateUser(id, email, password, role);
      },
      deleteUser: async (_parent, { id }) => {
        return await userService.deleteUser(id);
      }
    }
};

export default userResolvers;