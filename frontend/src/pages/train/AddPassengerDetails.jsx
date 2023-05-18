import React, { useEffect, useState } from "react";
import axios from "axios"
import Swal from "sweetalert2";
import Payment from "./payment";
import { useNavigate } from 'react-router-dom';



export default function AddPassengerDetails() {

    const [userId, setuserId] = useState("");
    const [trainId, settrainId] = useState("");
    const [trainName, settrainName] = useState("");
    const [price, setprice] = useState("");
    const [priceStatus, setpriceStatus] = useState(true);
    const [noOfTickets, setnoOfTickets] = useState("");
    const [firstName, setfirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [nationality, setnationality] = useState("");
    const [IdCardNumber, setIdCardNumber] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [isApproved, setisApproved] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setuserId(localStorage.getItem('user._id'));
        settrainName(localStorage.getItem('trainName'));
        setprice(localStorage.getItem('price'));
        settrainId(localStorage.getItem('trainID'));
    }, [])

    function sendData(e) {
        e.preventDefault();

        const newPassenger = {
            userId,
            trainId,
            trainName,
            price,
            priceStatus,
            noOfTickets,
            firstName,
            LastName,
            nationality,
            IdCardNumber,
            phoneNumber,
            email,
            isApproved
        }

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              axios
                .post("/seatBookings/add", {userId,trainId,trainName,price,noOfTickets,firstName,LastName,nationality,IdCardNumber,phoneNumber,email,isApproved,priceStatus})
                .then(() => {
                  Swal.fire("your ticket in under review", "", "success");
                  navigate("/train/MyTickets")
                  
                })
                .catch((err) => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                  });
                });
            } else if (result.isDenied) {
              Swal.fire("Details are not saved", "", "error");
            }
          });
      
        
    }


    return (
        <div> 
            <h1 className='uppercase text-center py-16 text-2xl md:text-3xl font-bold'>Add Passenger Details</h1>

            <div className="bg-[#DEEFFF]">
                <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
                    <form onSubmit={sendData}>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="noOfTickets"
                                placeholder="Number Of Tickets"
                                onChange={(e) => { setnoOfTickets(e.target.value) }}
                            />
                        </div>


                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="firstName"
                                placeholder="First Name"
                                onChange={(e) => { setfirstName(e.target.value) }}
                            />
                        </div>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="LastName"
                                placeholder="Last Name"
                                onChange={(e) => { setLastName(e.target.value) }}
                            />
                        </div>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="nationality"
                                placeholder="Nationality"
                                onChange={(e) => { setnationality(e.target.value) }}
                            />
                        </div>


                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="IdCardNumber"
                                placeholder="ID card Number"
                                onChange={(e) => { setIdCardNumber(e.target.value) }}
                            />
                        </div>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                onChange={(e) => { setphoneNumber(e.target.value) }}
                            />
                        </div>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="email"
                                placeholder="Email"
                                onChange={(e) => { setemail(e.target.value) }}
                            />
                        </div>

                        <Payment price={price} noOfTickets={noOfTickets}/>

                        <button
                            type="submit"
                            className="mt-6 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#41A4FF] rounded-lg text-white p-2 w-full"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Submit
                        </button>
                    </form>
                </div>
                
                
                
            </div>


        </div>
    )
}