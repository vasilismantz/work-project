import { AuthenticationError } from "apollo-server";
import { compareUserIds } from "../../utils";

export default {
  addProject: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Project.create({
      name: args.input.name,
      color: args.input.color,
      user: ctx.user.id,
    });
  },
  updateProject: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const Project = await ctx.models.Project.findOne({ _id: args.id });

    if (!Project) {
      throw new Error("Project not found.");
    }

    compareUserIds(Project.user, ctx.user.id);

    await ctx.models.Project.updateOne({ _id: Project.id }, args.input);

    return ctx.models.Project.findOne({ _id: Project.id });
  },
  removeProject: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const Project = await ctx.models.Project.findOne({ _id: id });

    if (!Project) {
      throw new Error("Project not found.");
    }

    compareUserIds(Project.user, ctx.user.id);

    await ctx.models.Project.deleteOne({ _id: Project.id });

    return Project;
  },
};
