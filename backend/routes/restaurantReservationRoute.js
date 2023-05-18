const express = require("express");
const RestaurantReservation = require("../controllers/resturentReservationController");
// import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", RestaurantReservation.getRestaurantReservations);
router.post("/create", RestaurantReservation.createReservation);
router.post("/get-reservation-request", RestaurantReservation.getRerservationRequests);
router.post("/get-reservation-request-canceled", RestaurantReservation.getRerservationRequestsCanceled);
router.post("/accept-reservation-request", RestaurantReservation.acceptReservation);
router.post("/decline-reservation-request", RestaurantReservation.declineReservation);
router.post("/get-reservation-requess-by-user", RestaurantReservation.getRerservationRequestsByUser);
router.post("/get-reservation-requess-by-id", RestaurantReservation.getRerservationRequestById);


module.exports = router;
