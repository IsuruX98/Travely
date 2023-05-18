const mongoose = require('mongoose');
const { Schema } = mongoose;

const resturentReservationTimeSchema = new Schema({
  date: { type: String, required: true },
});

const ResturentReservationTime = mongoose.model('ResturentReservationTime', resturentReservationTimeSchema);

module.exports = ResturentReservationTime;
