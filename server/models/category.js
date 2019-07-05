const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: { type: String, required: true, max: 100 },
  active: { type: Boolean, required: true }
});

module.exports = mongoose.model("Category", CategorySchema);
