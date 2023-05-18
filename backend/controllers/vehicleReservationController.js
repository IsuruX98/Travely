const Reservation = require("../models/VehicleReservation");
const Vehicle = require("../models/Vehicle");
const { v4: uuidv4 } = require("uuid");

exports.addReservation = async (req, res) => {
  //tested in postman - working well
  try {
    // Fetch vehicle details to calculate price
    const vehicle = await Vehicle.findById(req.body.vehicleId);

    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    const numberOfDays =
      (new Date(req.body.returnDate) - new Date(req.body.pickupDate)) /
      (1000 * 3600 * 24); //convert milliseconds to days
    let amount = (numberOfDays) * vehicle.price; //add by 1 because if pickup date is 1st and return date is 3rd, it is 2 days.

    if (numberOfDays < 0) {
      return res.status(400).json({ message: "Invalid dates" });
    }

    if(req.body.needDriver){
      amount = amount + numberOfDays * 2500;   //static driver fee
    }

    const newReservation = new Reservation({
      userId: req.body.userId,
      vehicleId: vehicle.id,
      vehicleNumber: vehicle.vehicleNumber,
      date: new Date(),
      location: vehicle.location,
      pickupDate: req.body.pickupDate,
      returnDate: req.body.returnDate,
      price: amount,
      needDriver : req.body.needDriver,
      vehicleOwnerId: vehicle.userId,
      transactionId: uuidv4(),
    });

    await newReservation.save();
    res.status(200).json(newReservation);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

//get my all reservations - traveler                               //postman tested working well.
exports.getMyReservationsTraveler = async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations = await Reservation.find({ userId: userId });
    res.send(reservations);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get my all reservations - owner                               //postman tested working well.
exports.getMyReservationsOwner = async (req, res) => {
  try {
    const { vehicleOwnerId } = req.params;
    const reservations = await Reservation.find({
      vehicleOwnerId: vehicleOwnerId,
    });
    res.send(reservations);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get a specific reservation - traveler                                 //postman tested working well.
exports.getOneReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findOne({ _id: id });
    res.send(reservation);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//delete/cancel a reservation   - traveler and vehicle owner     //postman tested working well.
exports.deleteReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await Reservation.findByIdAndDelete(id);
    if (!reservation) {
      res.status(404).send("Reservation not found");
    } else {
      res.send(reservation);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//get All reservations
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.send(reservations);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

//get reservations - traveler by vehicle id                 //postman tested working well.
exports.getMyReservationsTravelerByVehicle = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const reservations = await Reservation.find({ vehicleId: vehicleId });
    res.send(reservations);
  } catch (err) {
    res.status(500).send(err.message);
  }
}