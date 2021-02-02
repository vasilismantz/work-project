import DataLoader from "dataloader";
import { models, model, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", projectSchema);
export const projectLoader = new DataLoader(projectIds =>
  Project.find({ _id: { $in: projectIds } }).execute()
);
export default Project;
