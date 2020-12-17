import { AuthenticationError } from "apollo-server";
import { compare } from "bcryptjs";
import { check } from "prettier";
import { compareUserIds } from "../utils";

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

    return ctx.models.User.find({ user: ctx.user.id });
  },
  category: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const category = await ctx.models.Category.findOne({ _id: id });

    if (category) {
      compareUserIds(category.user, ctx.user.id);
    }

    return category;
  },
  categories: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Category.find({ user: ctx.user.id });
  },
  task: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const task = await ctx.models.Task.findOne({ _id: id });

    if (task) {
      compareUserIds(task.user, ctx.user.id);
    }

    return task;
  },
  tasks: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Task.find({ user: ctx.user.id });
  },
};
