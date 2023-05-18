const router = require("express").Router();
const reservationController = require("../controllers/vehicleReservationController");

router
        .route("/")
        .post(reservationController.addReservation) //add a reservation - traveler                             //working well tested in postman
        .get(reservationController.getAllReservations) //get all reservations - vehicle admin                    //working well tested in postman
router 
        .route("/:id")
        .delete(reservationController.deleteReservation) //delete/cancel a reservation - traveler and vehicle owner     //working well tested in postman
        .get (reservationController.getOneReservation) //get a specific reservation - traveler - owner                       //working well tested in postman

router
        .route("/traveler/:userId")
        .get (reservationController.getMyReservationsTraveler) //get all reservations - traveler               //working well tested in postman

 router
        .route("/owner/:vehicleOwnerId")
        .get (reservationController.getMyReservationsOwner) //get all reservations - vehicle owner                 //working well tested in postman

router 
        .route("/traveler/vehicles/:vehicleId")
        .get (reservationController.getMyReservationsTravelerByVehicle) //get all reservations - traveler by vehicle id                 //working well tested in postman

module.exports = router;
        