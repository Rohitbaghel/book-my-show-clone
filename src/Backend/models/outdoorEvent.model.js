const mongoose = require("mongoose");

const outdoorEventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    banner_image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const OutdoorEvent = mongoose.model("OutdoorEvent", outdoorEventSchema);

module.exports = OutdoorEvent;
