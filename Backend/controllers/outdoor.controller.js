const express = require("express");
const OutdoorEvent = require("../models/outdoorEvent.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const outdoorEvents = await OutdoorEvent.find().lean().exec();
        res.send(outdoorEvents);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const outdoorEvent = await OutdoorEvent.findById(req.params.id).lean().exec();
        res.send(outdoorEvent);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;