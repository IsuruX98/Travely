const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeatBookingSchema =  new Schema({
    userId : {type:String },
    trainId : {type:String },
    trainName : {type:String },
    price : {type:String },
    priceStatus : {type:Boolean},
    noOfTickets : {type:Number },
    firstName : {type:String },
    LastName : {type:String },
    nationality : {type:String },
    IdCardNumber : {type:String },
    phoneNumber : {type:String },
    email : {type:String },
    isApproved :{type : Boolean,default:true}
})

module.exports = mongoose.model('SeatBookingTrain',SeatBookingSchema);



