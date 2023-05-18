
const Room = require("../models/Room.js");
const Hotel = require("../models/Hotel.js");


const createRoom= async (req,res,next) =>{

    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body)

    try{
            const savedRoom =await newRoom.save()
            try{
                await Hotel.findByIdAndUpdate(hotelId, {$push :{rooms: savedRoom._id}})
            }catch(err){
                next(err)
            }
            res.status(200).json(savedRoom);
    }catch(err){
        next(err)
    }   
}

const updateRoom =async (req,res,next)=>{
    try{
        const updatedRoom= await Room.findByIdAndUpdate(req.params.id, {$set:req.body}
            ,{new:true})
        res.status(200).json(updatedRoom);

    }catch(err){
        next(err);
    }
}

const updateRoomAvailability =async (req,res,next)=>{
    try{
        console.log(req.body.dates)
        await Room.updateOne({"roomNumbers._id":req.params.id},{
            
            $push:{
                
                "roomNumbers.$.unavailableDates": req.body.dates 
            }
        })
        res.status(200).json("room updatedd");

    }catch(err){
        next(err);
    }
}



const deleteRoom =async (req,res,next)=>{
    const hotelId=req.params.hotelid;
    try{
        const deleteRoom= await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$pull :{rooms: req.params.id}})
        }catch(err){
            next(err)
        }
        res.status(200).json("Room has been deleted.");

    }catch(err){
        res.status(500).json(err);
    }
}

const getRoom=async (req,res,next)=>{
    try{
        const viewRoom= await Room.findById(req.params.id);
        res.status(200).json(viewRoom);

    }catch(err){
        next(err);
    }
}

const getAllRoom =async (req,res,next)=>{
    try{
        const Rooms= await Room.find();
        res.status(200).json(Rooms);

    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    createRoom, updateRoom, deleteRoom, getRoom, getAllRoom,updateRoomAvailability
  };
