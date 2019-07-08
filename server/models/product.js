const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, max: 100 },
    rowPrice: { type: Number, required: true },
    fullPrice: { type: Number, required: true },
    categoryId: { type: String, required: true }
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", ProductSchema);
