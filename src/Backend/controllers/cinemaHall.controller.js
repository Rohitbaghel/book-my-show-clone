const express = require("express");
const Cinema = require("../models/CinemaHall.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const cinemas = await Cinema.find().lean().exec();
        res.send(cinemas);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const cinema = await Cinema.findById(req.params.id).lean().exec();
        res.send(cinema);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;