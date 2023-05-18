const express = require("express");
const RestaurantRate = require("../controllers/resturentRateController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", RestaurantRate.getRestaurantRates);


module.exports = router;
