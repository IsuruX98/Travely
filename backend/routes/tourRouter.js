const express = require("express");
const tourController = require("../controllers/tourController");
const tourCustomForm = require("../controllers/tourCustomFormController");
const tourReservation = require("../controllers/tourReservstionController");

//define route handler
const router = express.Router();

//tour routes
router
  .route("/")
  .post(tourController.createTour)
  .get(tourController.getAllTours);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

//custom form
router.route("/customform").post(tourCustomForm.createForm);

// router.route("/tt").post(tourReservation.getAllReservations);
//reserve form
router
  .route("/tourReservations")
  .put(tourReservation.getAllReservations)
  .post(tourReservation.bookTour);

module.exports = router;
