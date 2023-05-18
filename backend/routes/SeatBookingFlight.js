const router = require("express").Router();
const FlightSeatBookingCtrl = require("../controllers/FlightSeatBookingCtrl")

router.route("/").get(FlightSeatBookingCtrl.searchFlight);    // fetched all the flights as tourists want
router.route("/add").post(FlightSeatBookingCtrl.flightBooking);   //flight seat booking -  tourist
router.route("/getAllBookings").get(FlightSeatBookingCtrl.fetchAllFlightBookings);  //fetch all flight train booking -admin (that need to review)
router.route("/getSingle/:id").get(FlightSeatBookingCtrl.getSingleFlightBooking);    // fetch single seat booking - tourist and admin
router.route("/delete/:id").delete(FlightSeatBookingCtrl.deleteSeatBooking);
router.route("/update/:id").put(FlightSeatBookingCtrl.updateSeatBookingFlight);   
router.route("/getMyFlights/:id").get(FlightSeatBookingCtrl.getMyAllTickets);     // get user's tickets

module.exports = router;