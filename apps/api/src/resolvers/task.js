export default {
  user: (obj, __, ctx) => ctx.models.User.findOne({ _id: obj.user }),
  project: (obj, __, ctx) => ctx.models.Project.findOne({ _id: obj.project }),
};
