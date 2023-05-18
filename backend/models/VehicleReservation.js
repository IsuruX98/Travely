const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationSchema = new Schema({
    userId: { type: String, required: true },
    vehicleId: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    date : {type: Date, required: true},
    location : {type: String, required: true},
    pickupDate : {type: Date, required: true},
    returnDate : {type: Date, required: true},
    price : {type: Number, required: true},
    vehicleOwnerId : {type: String, required: true},
    transactionId : {type: String, required: true},
    needDriver : {type: Boolean, required: true , default: false},
    
});

module.exports = mongoose.model("vehiclereservation", ReservationSchema);