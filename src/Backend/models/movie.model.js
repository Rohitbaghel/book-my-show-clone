const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movie_name: { type: String, required: true },
    movie_grade: { type: String, required: true },
    languages: { type: String, required: true },
    banner_image_url: { type: String, required: true },
    cover_image_url: { type: String, required: true },
    rating: {
      percentage: { type: Number, required: true },
      no_of_ratings: { type: Number, required: true },
    },
    movie_duration: { type: String, required: true },
    release_date: { type: String, required: true },
    is_premier: { type: Boolean, required: true },
    screen_type: [{ type: { type: String, required: true } }],
    movie_genre: [{ genre: { type: String, required: true } }],
    about_movie: { type: String, required: true },
    cast: [
      {
        original_name: { type: String, required: true },
        character: { type: String, required: true },
        cast_image: { type: String, required: true },
      },
    ],
    crew: [
      {
        name: { type: String, required: true },
        crew_position: { type: String, required: true },
        crew_image: { type: String, required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
