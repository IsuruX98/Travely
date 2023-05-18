const SeatBookingFlight = require("../models/FlightSeatBooking")
const axios = require("axios");

// get all the selected flights   -- search
const searchFlight = async (req,res)=>{
    const from = req.body.from;
    const to = req.body.to;
    const travelclass = req.body.travelclass;
    const depatureDate =  req.body.depatureDate;
    const returnDate = req.body.returnDate;
    const passengerCount = req.body.passengerCount;

    const options = {
        method: 'GET',
        url: 'https://skyscanner44.p.rapidapi.com/search-extended',
        params: {adults: passengerCount, origin: from, destination: to, departureDate: depatureDate},
        headers: {
          'X-RapidAPI-Key': '38a97ad371msh48b4374a05e5976p1ec39cjsn7ad2a7afb3aa',
          'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          res.json(response.data.itineraries.results);
      }).catch(function (error) {
          res.json(error);
      });
}


//flight seat booking -  tourist
const flightBooking =  async (req,res)=>{
    const newSeatBookingFlight = new SeatBookingFlight({
        ...req.body
    })
    
    await newSeatBookingFlight.save().then((newSeatBookingFlight)=>{
        res.json(newSeatBookingFlight)
    }).catch((err)=>{
        res.json(err.message)
    })
}

//fetch all flight train booking -admin (that need to review)
const fetchAllFlightBookings = async(req,res)=>{
    await SeatBookingFlight.find().then((allBooking)=>{
        res.json(allBooking);
    }).catch((err)=>{
        res.json(err.message)
    })
}

// fetch single seat booking - tourist and admin
const getSingleFlightBooking = async(req,res)=>{
    const id = req.params.id;

    await SeatBookingFlight.findById(id).then((obj)=>{
        res.json(obj);
    }).catch((err)=>{
        res.json({error :err.message});
    })
}
// fetch all the tickets of single user
const getMyAllTickets = ((req,res)=>{
    const ID = req.body.userID;

     SeatBookingFlight.find({userID:ID}).then((bookings)=>{
        res.json(bookings)
    }).catch((err)=>{
        res.json(err.message)
    })
})


// deletee seat Reservation    - tourist
const deleteSeatBooking = async(req,res)=>{
    const id = req.params.id;

    await SeatBookingFlight.findByIdAndDelete(id).then(()=>{
        res.json("deleted");
    }).catch((err)=>{
        res.json(err.message);
    })
}

// update seatReservation -  tourists
const updateSeatBookingFlight = async (req,res)=>{
    const id = req.body.id;

    const {userID,flightID,flightName,from,to,arrivalTime,depatureTime,date,price,priceStatus,
        firstName,LastName,nationality,IdCardNumber,phoneNumber,email,isApproved
    } =  req.body;

    const updatedSeatBookingFlight = {
        userID,flightID,flightName,from,to,arrivalTime,depatureTime,date,price,priceStatus,
        firstName,LastName,nationality,IdCardNumber,phoneNumber,email,isApproved
    }  

    await SeatBookingFlight.findByIdAndUpdate(id,updateSeatBookingFlight).then(()=>{
        res.json({status:"updated"});
    }).catch((err)=>{
        res.json(err.message)
    })

}


module.exports={
    searchFlight,
    flightBooking,
    fetchAllFlightBookings,
    getSingleFlightBooking,
    deleteSeatBooking,
    updateSeatBookingFlight,
    getMyAllTickets
}