import { AuthenticationError } from "apollo-server";
import { compareUserIds } from "../../utils";

export default {
  addTask: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    console.log(args.input.projectId);

    return ctx.models.Task.create({
      name: args.input.name,
      date: args.input.date,
      isArchived: args.input.isArchived,
      project: args.input.projectId,
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
