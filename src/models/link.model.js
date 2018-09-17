import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: { type: String },
    url: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    sitetitle: { type: String },
    author: { type: String },
    logo: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Links", schema);
