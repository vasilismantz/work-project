export default {
  user: (obj, __, ctx) => ctx.models.User.findOne({ _id: obj.user }),
  tasks: (obj, __, ctx) => ctx.models.Task.find({ project: obj.id }),
};
