const mongoose=require('mongoose')

const hotelReservationModel=new mongoose.Schema({
    hotelName:{
        type:String,
        required:false
    },
    checkInDate:{
        type:String,
        required:true
    },
    checkOutDate:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true 
    },
    totalPrice:{
        type:String,
        reqiured:true
    },
    totalDays:{
        type:Number,
        reqiured:true
    }
    
    
   
},{timestamps :true}) 

module.exports =  mongoose.model("hotelReservation",hotelReservationModel)  