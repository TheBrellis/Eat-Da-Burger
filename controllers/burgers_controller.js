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

//===================================================================

module.exports = router;