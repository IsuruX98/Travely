const tourReserve = require("../models/tourBook");

const bookTour = async (req, res) => {
  try {
    console.log("ava");
    const newRes = new tourReserve(req.body);
    const saveRes = await newRes.save();

    res.status(200).json({
      status: "Success",
      message:
        "Your have SuccessFully booked this tour, One of our Agent will contact you!",
      data: {
        book: saveRes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Unsuccess",
      message: "Error Booking Tour",
    });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const allReservations = await tourReserve.find();
    res.status(200).send(allReservations);
  } catch (err) {
    console.log();
    res.status(404).json({
      status: "unsuccess",
      message: "err.message",
    });
  }
};

module.exports = { bookTour, getAllReservations };
