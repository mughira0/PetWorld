import mongoose, { Schema } from "mongoose";

const petListingSchema = mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    images: [{ type: String }],
    price: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "PetCategory",
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const petListingModel = mongoose.model("PetListing", petListingSchema);
export default petListingModel;
