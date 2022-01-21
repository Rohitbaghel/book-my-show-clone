const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    food_name: { type: String, required: true },
    is_popcorn: { type: Boolean, required: true },
    is_coke: { type: Boolean, required: true },
    is_combo: { type: Boolean, required: true },
    food_tag: { type: String, required: true },
    food_image: { type: String, required: true },
    food_price: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
