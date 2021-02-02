import { AuthenticationError } from "apollo-server";
import moment from "moment";
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
  project: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const project = await ctx.models.Project.findOne({ _id: id });

    if (project) {
      compareUserIds(project.user, ctx.user.id);
    }

    return project;
  },
  projectByName: async (_, { name }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    const projects = await ctx.models.Project.find({ name });

    let correctProject = null;

    projects.map(project => {
      if (project.user == ctx.user.id) {
        correctProject = project;
      }
    });

    return correctProject;
  },
  projects: (_, __, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    return ctx.models.Project.find({ user: ctx.user.id });
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
  tasks: (_, { isArchived, projectId, date }, ctx) => {
    if (!ctx.user) {
      throw new AuthenticationError("You are not logged in.");
    }

    let findTask;

    if (projectId) {
      findTask = ctx.models.Task.find({
        user: ctx.user.id,
        isArchived,
        project: projectId,
      });
    } else if (date) {
      findTask = ctx.models.Task.find({
        user: ctx.user.id,
        isArchived,
        date: { $gt: moment().startOf("day"), $lte: date },
      });
    } else {
      findTask = ctx.models.Task.find({
        user: ctx.user.id,
        isArchived,
      });
    }

    return findTask;
  },
};
