const express = require("express");
const Food = require("../models/food.model");

const router = express.Router();

router.get("/", async(req, res) => {
    try{
        const foods = await Food.find().lean().exec();
        res.send(foods);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});

router.get("/:id", async(req, res) => {
    try{
        const food = await Food.findById(req.params.id).lean().exec();
        res.send(food);
    } catch(e){
        res.status(500).send({message: e.message});
    }
});



module.exports = router;