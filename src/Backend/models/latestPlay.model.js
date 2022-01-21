const mongoose = require("mongoose");

const latestPlaySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    languages: { type: String, required: true },
    banner_image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const LatestPlay = mongoose.model("LatestPlay", latestPlaySchema);

module.exports = LatestPlay;
