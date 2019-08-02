import { DATABASE_URI } from "../config";

import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const Schema = mongoose.Schema;
const connection = mongoose.createConnection(DATABASE_URI);

autoIncrement.initialize(connection);

const ProductSchema = new Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true, max: 100 },
    rowPrice: { type: Number, required: true },
    fullPrice: { type: Number, required: true },
    categoryId: { type: String, required: true }
  },
  { collection: "products" }
);

ProductSchema.plugin(autoIncrement.plugin, {
  model: "Product",
  field: "_id",
  startAt: 1
});

module.exports = mongoose.model("Product", ProductSchema);
