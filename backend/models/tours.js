const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addTourForm = new Schema({
  currentUser: {
    type: String,
    required: [true, "Must be login first"],
  },
  img: {
    type: String,
    required: [true, "must provide a photo"],
  },
  name: {
    type: String,
    required: [true, "must provide a name "],
  },
  category: {
    type: String,
    required: [true, "must provide a category "],
  },
  price: {
    type: Number,
    required: [true, "must provide a price"],
  },
  groupCount: {
    type: Number,
    required: [true, "must provide a Group Count"],
  },
  languages: {
    type: String,
    required: [true, "must provide Languages"],
  },
  duration: {
    type: String,
    required: [true, "must provide a duration"],
  },
  cities: {
    type: String,
    required: [true, "must provide a cities"],
  },
  description: {
    type: String,
    required: [true, "must provide a description"],
  },
  introduction: {
    type: String,
    required: [true, "must provide a Introduction"],
  },
});

const tourDetails = mongoose.model("Tour Details", addTourForm);
module.exports = tourDetails;
