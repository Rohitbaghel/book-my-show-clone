const mongoose = require("mongoose");

const laughterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    banner_image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Laughter = mongoose.model("Loughter", laughterSchema);

module.exports = Laughter;
