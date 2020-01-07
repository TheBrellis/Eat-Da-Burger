const express = require("express");
const router = express.Router();

//Importing orm model
const burger = require("../models/burger.js");
//Page Routings ================================================= 

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    })
});


router.post("/api/add", function(req, res) {
    burger.insertOne([
        "burger_name","devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json("Burger has been added to dB!");
    });
});

//===================================================================

module.exports = router;