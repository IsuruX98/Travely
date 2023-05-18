const express=require("express");
const Hotel = require("../models/Hotel.js");

const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel,
    countByCity,
    countByType,
    getHotelbyCity,
    getHotelRooms

  } = require("../controllers/hotel.js");



const router =express.Router();
//Create
router.post("/",createHotel)

//update

router.put("/:id",updateHotel)

//Delete

router.delete("/:id",deleteHotel)

//get
router.get("/find/:id", getHotel)

// Get all hotels
router.get("/",getAllHotel)

router.get("/countByCity",countByCity)

router.get("/countByType",countByType)


router.get("/get/:city",getHotelbyCity)

router.get("/room/:id",getHotelRooms);   



module.exports = router    