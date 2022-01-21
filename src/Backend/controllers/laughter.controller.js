const express = require("express");
const Laughter = require("../models/Laughter.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const laughters = await Laughter.find().lean().exec();
        res.send(laughters);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const laughter = await Laughter.findById(req.params.id).lean().exec();
        res.send(laughter);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});


module.exports = router;