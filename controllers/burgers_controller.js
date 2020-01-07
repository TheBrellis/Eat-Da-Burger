const express = require("express");
const router = express.Router();

//Importing orm model
const burger = require("../models/burger.js");
//Page Routings ================================================= 

router.get("/", function (req, res) {
    res.render("index")
});

router.put("/api/add", function (req,res) {

    res.render("index")
})

router.post("/api/add", function(req, res) {
    burger.create([
        "burger_name","devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json("Burger has been added to dB!");
    });
});

//===================================================================

module.exports = router;