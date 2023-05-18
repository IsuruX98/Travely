const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSeatBookingSchema =  new Schema({
    userID : { type : String,required : true},
    flightID : { type : String,required : true},
    flightName : { type : String,required : true},
    from : { type : String,required : true},
    to : { type : String,required : true},
    arrivalTime : { type : String,required : true},
    depatureTime : { type : String,required : true},
    date : {type:String},
    price : {type :  String},
    priceStatus : {type:String , required : true},
    firstName : {type:String , required : true},
    LastName : {type:String , required : true},
    nationality : {type:String , required : true},
    IdCardNumber : {type:String , required : true},
    phoneNumber : {type:String , required : true},
    email : {type:String , required : true},
    isApproved :{type : Boolean,default:false}
})

module.exports = mongoose.model('SeatBookingFlight',flightSeatBookingSchema);


