const express = require("express");
const RestaurantReservationTime = require("../controllers/resturentReservationTimeController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", RestaurantReservationTime.getRestaurantReservationTimes);


module.exports = router;
