const mongoose = require('mongoose');
const { Schema } = mongoose;

const resturentReservationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  resturent: { type: Schema.Types.ObjectId, ref: 'Resturent', required: true },
  date: { type: Date, required: true },
  time: { type: Schema.Types.ObjectId, ref: 'ResturentReservationTime', required: true },
  propleCount: { type: Number, integer: true, required: true },
  title: { type: String, required: true },
  tableNo: { type: Number, integer: true, required: true },
  status: { type: String, enum: ['PENDING', 'ACCEPTED', 'USER_CANCELD', 'REJECTED'], default: 'PENDING' },
});

const ResturentReservation = mongoose.model('ResturentReservation', resturentReservationSchema);

module.exports = ResturentReservation;
