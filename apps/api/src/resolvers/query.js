export default {
  me: (_, __, ctx) => {
    if (!ctx.user) {
      throw new Error("User could not be found.");
    }

    return ctx.user;
  },
  user: (_, { id }, ctx) => ctx.models.User.findOne({ _id: id }),
  users: (_, __, ctx) => ctx.models.User.find({}),
  category: (_, { id }, ctx) => ctx.models.Category.findOne({ _id: id }),
  categories: (_, __, ctx) => ctx.models.Category.find({}),
  task: (_, { id }, ctx) => ctx.models.Task.findOne({ _id: id }),
  tasks: (_, __, ctx) => ctx.models.Task.find({}),
};
