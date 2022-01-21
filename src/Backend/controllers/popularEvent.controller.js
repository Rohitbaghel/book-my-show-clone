const express = require("express");
const PopularEvent = require("../models/PopularEvent.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const popularEvents = await PopularEvent.find().lean().exec();
        res.send(popularEvents);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const PopularEvent = await PopularEvent.findById(req.params.id).lean().exec();
        res.send(PopularEvent);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;