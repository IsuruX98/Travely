const express = require("express");
const restaurant = require("../controllers/resturentController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", restaurant.createResturent);
router.post("/find-resturent-by-id", restaurant.findResturentById);
router.post("/find-resturent-by-name", restaurant.findResturentByName);
router.post("/find-first-five-resturents", restaurant.findFirstFiveResturents);


module.exports = router;
