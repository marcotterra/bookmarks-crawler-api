import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    sitetitle: { type: String },
    author: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Links", schema);
