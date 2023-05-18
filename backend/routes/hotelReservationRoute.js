const express=require("express");
const Hotel = require("../models/hotelReservationModel");
const {
    reservation, getAllReservation
  } = require("../controllers/hotelReservation.js");

  const router =express.Router();
  //Create
  router.post("/reservation",reservation)
  router.get("/getAll",getAllReservation)


module.exports = router;
   