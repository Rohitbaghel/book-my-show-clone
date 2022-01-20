const Movie = require("../models/movie.model");

const express = require("express");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const movies = await Movie.find().lean().exec();
        res.send(movies);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const movie = await Movie.findById(req.params.id).lean().exec();
        res.send(movie);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;