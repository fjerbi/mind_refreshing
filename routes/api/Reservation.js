var express = require("express");
var router = express.Router();
const uuid = require("uuid");
const mongoose = require("mongoose"),
  models = require("../../models/Reservation");
  const reservations = require("../../models/Reservation");
//Routes for '/api/'

//call for adding a new sites (requires authentication)

// READ (ALL)
router.get("/", (req, res) => {
  models.reservations.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

module.exports = router;
