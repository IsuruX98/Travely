const hotelReservation = require("../models/hotelReservationModel");

 const reservation=async (req, res, next) => {

    const {
        hotelName,
        checkInDate,
        checkOutDate,
        userName,
        totalPrice,
        totalDays
    }= req.body

    try{
        const newReservation = new hotelReservation({
            hotelName,
            checkInDate,
            checkOutDate,
            userName,
            totalPrice,
            totalDays
        });
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation);
    }
    catch(err){
        next(err)
    }
};

const getAllReservation = async (req, res, next) => {
    
    try {
      const hotels = await hotelReservation.find({
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
  };




module.exports = {
    reservation,
    getAllReservation
  };