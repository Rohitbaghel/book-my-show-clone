const mongoose = require("mongoose");

const popularEventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    banner_image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const PopularEvent = mongoose.model("PopularEvent", popularEventSchema);

module.exports = PopularEvent;
