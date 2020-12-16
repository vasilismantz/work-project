import { AuthenticationError } from "apollo-server";

export default {
  me: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.user;
  },
  user: (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.User.findOne({ _id: id });
  },
  users: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.User.find({});
  },
  category: (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }
    ctx.models.Category.findOne({ _id: id });
  },
  categories: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Category.find({});
  },
  task: (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Task.findOne({ _id: id });
  },
  tasks: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Task.find({});
  },
};
