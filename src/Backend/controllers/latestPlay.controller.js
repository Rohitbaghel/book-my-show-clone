const express = require("express");
const LatestPlay = require("../models/latestPlay.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const latestPlays = await LatestPlay.find().lean().exec();
        res.send(latestPlays);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const latestPlay = await LatestPlay.findById(req.params.id).lean().exec();
        res.send(latestPlay);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;