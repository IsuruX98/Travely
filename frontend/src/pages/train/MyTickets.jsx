import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyTickets = ()=>{

    const [seatBookings, setSeatBooking] = useState([])

    useEffect(() => {
        const getAllSeatBooking = () => {
            axios.get("/seatBookings/").then((res) => {
                console.log(res.data)
                setSeatBooking(res.data)
            }).catch((err) => {
                console.log(err.message)
            })
        }

        getAllSeatBooking()
    }, [])

    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-2xl font-bold mb-4">My Tickets</h1>
            <div className="grid grid-cols-4 gap-4">
                {seatBookings.map((seatBooking) => (
                    <div
                        key={seatBooking.id}
                        className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
                    >
                        <p className="text-lg font-bold mb-2">{seatBooking.trainName}</p>
                        <p className="text-gray-500 text-sm">noOfTickets :{seatBooking.noOfTickets}</p>
                        <p className="text-gray-500 text-sm">Total Price :{seatBooking.price}</p>
                        <Link
                            to={`/train/MyTickets/${seatBooking._id}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md mt-4 block text-center"
                        >
                         Show 
                        </Link>
                    </div>
                ))}
            </div>
        </div>


    )

}

export default MyTickets;