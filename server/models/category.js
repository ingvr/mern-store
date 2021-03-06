import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title: { type: String, required: true, max: 100 }
  },
  { collection: "categories" }
);

module.exports = mongoose.model("Category", CategorySchema);
