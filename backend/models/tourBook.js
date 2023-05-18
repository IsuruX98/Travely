const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourBook = new Schema({
  currentUser: {
    type: String,
    required: [true, "User Must login First"],
  },
  firstName: {
    type: String,
    required: [true, "Must provide your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Must provide your last Name"],
  },
  date: {
    type: Date,
    required: [true, "Must provide a Date to start tour"],
  },
  phone: {
    type: String,
    required: [true, "Must provide a phone number"],
  },
  guestCount: {
    type: Number,
    required: [true, "Must provide a guest count"],
  },
});

const tourReservation = mongoose.model("tour Reservation", tourBook);
module.exports = tourReservation;
