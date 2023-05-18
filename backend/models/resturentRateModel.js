const mongoose = require('mongoose');
const { Schema } = mongoose;

const resturentRateSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  resturent: { type: Schema.Types.ObjectId, ref: 'Resturent', required: true },
  date: { type: Date, default: Date.now },
  comment: { type: String, required: true },
  rate: { type: Number, integer: true, required: true },
  status: { type: String, enum: ['VALID', 'INVALID'], default: 'VALID' },
});

const ResturentRate = mongoose.model('ResturentRate', resturentRateSchema);

module.exports = ResturentRate;
