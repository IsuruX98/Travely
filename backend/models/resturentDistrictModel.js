const mongoose = require('mongoose');
const { Schema } = mongoose;

const districtSchema = new Schema({
  name: { type: String, required: true }
});

const ResturentDistrict = mongoose.model('ResturentDistrict', districtSchema);

module.exports = ResturentDistrict;