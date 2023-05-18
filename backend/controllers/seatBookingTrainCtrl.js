const SeatBookingTrain = require("../models/SeatBooking");
const path = require("path")

// add seat booking - tourists
const addSeatBooking = async(req,res)=>{
    const newSeatBooking = new SeatBookingTrain({
        ...req.body
    })

    await newSeatBooking.save().then((newSeatBooking)=>{
        res.json(newSeatBooking);
    }).catch((err)=>{
        res.json(err.message);
    })
}
// fetch all tickets - admin (that need to review)
const fetchAllBookings =  async(req,res)=>{
    await SeatBookingTrain.find().then((allBooking)=>{
        res.json(allBooking);
    }).catch((err)=>{
        res.json(err.message);
    })
}
// fetch all tickets of single user  - tourits
const myBookings = ((req,res)=>{
    const ID = req.body.userId;

    SeatBookingTrain.find({userId : ID}).then((booking)=>{
        res.json(booking);
    }).catch((err)=>{
        res.json(err.message)
    })
}) 





// fetch single seat booking   - tourists and admin
const getSingleSeatBooking = async(req,res)=>{
    const id = req.params.id;

    await SeatBookingTrain.findById(id).then((obj)=>{
        res.json(obj);
    }).catch((err)=>{
        res.json(err.message);
    })
}

// delete seatReservation  -  tourists
const deleteSeatBooking = async(req,res)=>{
    const id = req.params.id;

    await SeatBookingTrain.findByIdAndDelete(id).then(()=>{
        res.json("deleted");
    }).catch((err)=>{
        res.json(err.message);
    })
}

// update seatReservation -  tourists
const updateSeatBooking = async (req,res)=>{
    const id = req.params.id;

    const {userId,trainId,trainName,price,priceStatus,noOfTickets,
        firstName,LastName,nationality,IdCardNumber,phoneNumber,email,isApproved
    } = req.body;

    const updatedSeatBooking = {userId,trainId,trainName,price,priceStatus,noOfTickets,
        firstName,LastName,nationality,IdCardNumber,phoneNumber,email,isApproved
    }

    await SeatBookingTrain.findByIdAndUpdate(id,updatedSeatBooking).then(()=>{
        res.json({status:"updated"});
    }).catch((err)=>{
        res.json(err.message)
    })
}

module.exports = {
    addSeatBooking,
    getSingleSeatBooking,
    deleteSeatBooking,
    updateSeatBooking,
    fetchAllBookings,
    myBookings
}