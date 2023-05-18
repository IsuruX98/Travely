const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomForm = new Schema({
  currentUser: {
    type: String,
    required: [true, "user must be included"],
  },
  whereFrom: {
    type: String,
    required: [true, "Select from Where do you want to start"],
  },
  whereTo: {
    type: String,
    required: [true, "Select to where do you want to end"],
  },
  days: {
    type: Number,
    required: [true, "Select Number of days you want to spend"],
  },
});

const Form = mongoose.model("tour_Customize_Form", CustomForm);
module.exports = Form;
