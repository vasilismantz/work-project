import { AuthenticationError } from "apollo-server";
import { compareUserIds } from "../../utils";

export default {
  addTask: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Task.create({
      name: args.input.name,
      date: args.input.date,
      category: args.input.categoryId,
      user: ctx.user.id,
    });
  },
  updateTask: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const task = await ctx.models.Task.findOne({ _id: args.id });

    if (!task) {
      throw new Error("Task not found.");
    }

    compareUserIds(task.user, ctx.user.id);

    await ctx.models.Task.updateOne({ _id: task.id }, args.input);

    return ctx.models.Task.findOne({ _id: task.id });
  },
  removeTask: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const task = await ctx.models.Task.findOne({ _id: id });

    if (!task) {
      throw new Error("Task not found.");
    }

    compareUserIds(task.user, ctx.user.id);

    await ctx.models.Task.deleteOne({ _id: task.id });

    return task;
  },
};
