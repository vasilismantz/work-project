import DataLoader from "dataloader";
import { models, model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isArchived: {
      type: Boolean,
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  { timestamps: true }
);

const Task = models.Task || model("Task", taskSchema);
export const taskLoader = new DataLoader(taskIds =>
  Task.find({ _id: { $in: taskIds } }).execute()
);
export default Task;
