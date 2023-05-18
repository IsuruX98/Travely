const mongoose=require('mongoose')

const RoomSchema=new mongoose.Schema({
    title:{
        type:String,  
        required:true
    },    
    price:{ 
        type:Number,   
        required:true 
    },  
    description:{
        type:String,  
        reqiured:true
    },
    maxPeople:{    
        type:Number,
        reqiured:true
    },
    roomNumbers: [{number : Number, unavailableDates :{type: [Date]}}],
    
}) 
module.exports =  mongoose.model("Room",RoomSchema)   