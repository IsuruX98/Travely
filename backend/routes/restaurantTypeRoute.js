const express = require("express");
const RestaurantType = require("../controllers/resturentTypeController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", RestaurantType.getRestaurantTypes);


module.exports = router;
