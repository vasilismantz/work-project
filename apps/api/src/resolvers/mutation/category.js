export default {
  addCategory: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new Error("User not found.");
    }

    return ctx.models.Category.create({
      name: args.input.name,
      color: args.input.color,
      user: ctx.user.id,
    });
  },
  updateCategory: async (_, args, ctx) => {
    if (!ctx.user) {
      throw new Error("User not found.");
    }

    const category = await ctx.models.Category.findOne({ _id: args.id });

    if (!category) {
      throw new Error("Category not found.");
    }

    // TO DO
    // check if category belongs to user

    await ctx.models.Category.updateOne({ _id: category.id }, args.input);

    return ctx.models.Category.findOne({ _id: category.id });
  },
  removeCategory: async (_, { id }, ctx) => {
    if (!ctx.user) {
      throw new Error("User not found.");
    }

    const category = await ctx.models.Category.findOne({ _id: id });

    if (!category) {
      throw new Error("Category not found.");
    }

    // TO DO
    // check if category belongs to user

    await ctx.models.Category.deleteOne({ _id: category.id });

    return category;
  },
};
