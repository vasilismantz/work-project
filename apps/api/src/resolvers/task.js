export default {
  user: (obj, __, ctx) => ctx.models.User.findOne({ _id: obj.user }),
  category: (obj, __, ctx) =>
    ctx.models.Category.findOne({ _id: obj.category }),
};
