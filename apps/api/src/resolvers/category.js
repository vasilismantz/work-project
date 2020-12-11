export default {
  user: (obj, __, ctx) => ctx.models.User.findOne({ _id: obj.user }),
};
