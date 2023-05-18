const {mongoose, Schema} = require("mongoose");


const vehicleSchema = new Schema({

  ownerName: {type: String, required : true}, 
  brand: {type: String, required : true},
  model: {type: String, required : true},
  vehicleType : {type : String, required : true},
  userId : {type : String, },
  vehicleNumber : {type: String, required : true},
  capacity : {type: Number, required : true},
  transmissionType : {type: String, required : true},
  fuelType : {type: String, required : true},
  price : {type: Number, required : true},
  description : {type: String, required : true},
  insuranceImgs: [{ type: String, required : true }],
  vehicleMainImg: {type : String, required : true},
  vehicleImgs: [{ type: String, required : true }],
  location : {type: String, required : true},
  isAccepted : {type: Boolean, required : true, default : false},
  
});


module.exports = mongoose.model('Vehicle', vehicleSchema);
