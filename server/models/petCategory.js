import mongoose from "mongoose";

const petCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const petCategoryModel = mongoose.model("PetCategory", petCategorySchema);
export default petCategoryModel;
