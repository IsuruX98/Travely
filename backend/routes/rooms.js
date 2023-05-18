
const express=require("express");

const {
    createRoom,updateRoom, deleteRoom, getRoom, getAllRoom, updateRoomAvailability
  } = require("../controllers/room.js");

const router =express.Router();

// must be change after user auth done

//Create
router.post("/:hotelid",createRoom)

//update

router.put("/:id",updateRoom)
router.put("/availability/:id",updateRoomAvailability)

//Delete
 
router.delete("/:id/:hotelid",deleteRoom)

//get
router.get("/:id", getRoom)

// Get all hotels
router.get("/",getAllRoom)


module.exports = router 