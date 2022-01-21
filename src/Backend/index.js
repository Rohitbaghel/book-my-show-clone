const express = require("express");

const app = express();

app.use(express.json());

const movieController = require("./controllers/movie.controller");
const cinemaController = require("./controllers/cinemaHall.controller");
const foodController = require("./controllers/food.controller");
const latestPlayController = require("./controllers/latestPlay.controller");
const laughterController = require("./controllers/laughter.controller");
const outdoorEventController = require("./controllers/outdoor.controller");
const popularEventController = require("./controllers/popularEvent.controller");

app.use("/movies", movieController);
app.use("/cinemas", cinemaController);
app.use("/foods", foodController);
app.use("/latests", latestPlayController);
app.use("/laughters", laughterController);
app.use("/outdoor-events", outdoorEventController);
app.use("/populars", popularEventController);

module.exports = app;
