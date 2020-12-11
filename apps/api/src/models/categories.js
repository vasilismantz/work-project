import DataLoader from "dataloader";
import { models, model, Schema } from "mongoose";

const categorySchema = new Schema(
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

const Category = models.Category || model("Category", categorySchema);
export const categoryLoader = new DataLoader(categoryIds =>
  Category.find({ _id: { $in: cateogoryIds } }).execute()
);
export default Category;
