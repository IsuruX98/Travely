const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainSchema =  new Schema({
    trainName : { type : String},
    from : {type : String},
    to : {type : String },
    arrivalTime : { type : String},
    depatureTime : {type : String},
    date : {type : String},
    price : {type : String}, 
    noOfSeats : {type : Number},
    description : {type: String,},    
    trainMainImg :{type:String},
    MaxBagage : {type:String},
    classType: { type : String},
    cancelCharges : {type:String}
})

module.exports = mongoose.model('trainSchedule',trainSchema);


