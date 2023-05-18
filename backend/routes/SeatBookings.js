const router = require("express").Router();
const seatBookingCtrl = require("../controllers/seatBookingTrainCtrl");

router.route("/add").post(seatBookingCtrl.addSeatBooking);    // add seat booking
router.route("/").get(seatBookingCtrl.fetchAllBookings)      // fetched all the bookings - admin only
router.route("/get/:id").get(seatBookingCtrl.getSingleSeatBooking);   // fechd only one ticket - admin / tourists
router.route("/update/:id").put(seatBookingCtrl.updateSeatBooking);    // update 
router.route("/delete/:id").delete(seatBookingCtrl.deleteSeatBooking);    // delete
router.route("/getSingleUser/:userId").get(seatBookingCtrl.myBookings);      // my booking under single user ID

module.exports = router;