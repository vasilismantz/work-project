import DataLoader from "dataloader";
import { models, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    resetToken: {
      type: String,
      trim: true,
    },
    resetTokenExpiry: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export const userLoader = new DataLoader(userIds =>
  User.find({ _id: { $in: userIds } }).execute()
);
export default User;
