const mongoose = require('mongoose');
const { Schema } = mongoose;

const resturentTypeSchema = new Schema({
  name: { type: String, required: true },
});

const ResturentType = mongoose.model('ResturentType', resturentTypeSchema);

module.exports = ResturentType;

