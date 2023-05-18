const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RefundsSchema = new Schema({
    Name :{
        type: String
    },
    Email :{
        type:String
    },
    Requested_Date :{
        type : String
    },
    Package_name : {
        type : String 
    },
    BookingId:{
        type:String
    },

    Additional_note:{
        type:String
    }
})

module.exports = mongoose.model('Refund',RefundsSchema)