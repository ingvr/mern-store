const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  items: {
    key: { type: Number, required: true },
    title: { type: String, required: true, max: 100 },
    active: { type: Boolean, required: true }
  },
  nextCategoryId: { type: Number, required: true }
});

module.exports = mongoose.model("Category", CategorySchema);
