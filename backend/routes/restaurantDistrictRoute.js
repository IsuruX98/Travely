const express = require("express");
const RestaurantDistrict = require("../controllers/resturentDistrictController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", RestaurantDistrict.getRestaurantDistricts);


module.exports = router;
