import axios from 'axios';
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Payment = () => {

    const location = useLocation();

    const {data, pickupDate, returnDate, driver} = location.state ?? {};

    const { user } = useContext(AuthContext);


    const userId = user._id            //userId to be added from the session
    console.log("User Id: " + userId)
    const vehicleId = data?._id || ''
    const needDriver = driver

    console.log(needDriver)

    const numberOfDays = () => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(pickupDate);
        const secondDate = new Date(returnDate);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
    }

    const total = numberOfDays() * data?.price;

    let totalWithDriver = null;
    let driverFee = numberOfDays() * 2500;

    if(needDriver) {
        totalWithDriver = total + (2500 * numberOfDays())
        console.log(totalWithDriver)
        console.log(numberOfDays())
    } else {
        totalWithDriver = total
        driverFee = 0

    }

    function sendData(e){
        e.preventDefault();

        const reservationData = {
            userId,
            vehicleId,
            pickupDate,
            returnDate,
            needDriver,
          };


        axios
        .post('/vehiclereservation', reservationData).then(() => {
                Swal.fire({
                    
                    icon: 'success',
                    title: 'Vehicle Reserved Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }).catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: err
                  })
                });
    }



  return (
    <div className='lg:p-24 p-6'>
                   
        <form className='w-full pt-2 flex flex-col lg:flex-row justify-between'>

            <div className='p-8'>

                <h1 className='lg:text-2xl text-2xl font-bold'>Payment Method</h1>
                    <br></br>
                    <h1 className='font-semibold text-[#565656] lg:text-lg'>Card Number</h1>
                    <p className='text-[#929292] text-sm pt-2'>Enter the 16 digit card number on the card</p>
                    <input type='text' placeholder='2412 7654 1234 0987' className='border rounded-md p-2 w-[200px] mt-2 text-center '/>

                    <h1 className='font-semibold text-[#565656] lg:text-lg pt-6'>CVV</h1>
                    <p className='text-[#929292] text-sm pt-2'>Enter the 3 or 4 digit number on the back side of the card</p>      
                    <input type='text' placeholder='241' className='border rounded-md p-2 w-[45px] mt-2 text-center'/>

                    <h1 className='font-semibold text-[#565656] lg:text-lg pt-6'>Expiry Date</h1>
                    <p className='text-[#929292] text-sm pt-2'>Enter the expire date of the card</p>

                    <div className='flex'>
                        <input type='text' placeholder='MM' className='border rounded-md p-2 w-[50px] mt-2 text-center'/>
                        <input type='text' placeholder='YY' className='border rounded-md p-2 w-[50px] mt-2 ml-4 text-center'/>
                    </div>
              </div>

              <div className='flex flex-col justify-center items-center'>
                  <div className='border rounded-lg p-10 m-8  w-full'>
                      <h1 className='font-semibold py-6'>Order Summary</h1>

                                        <div className='flex gap-28'>
                                            <p>Vehicle fee</p>
                                            <p className='ml-auto'>{total}</p>
                                        </div>

                                        <div className='flex gap-28 border-b py-2'>
                                            <p>Driver fee</p>
                                            <p className='ml-auto'>{driverFee}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-bold py-2'>Total</p>
                                            <p className='ml-auto'>{totalWithDriver}</p>
                                        </div>
                   </div>
                      <button className='bg-[#41A4FF] rounded-lg text-white p-2 w-full' onClick={sendData} >Confirm and Pay Now</button>
                      <div className='flex items-center pt-2'>
                        <FaLock className='text-[#b4b4b4]'/>
                      <h1 className='text-[#b4b4b4]  font-extralight pl-4'>Payments are secured and encrypted.</h1>
                      </div>
                </div>

      </form>
 </div>

    
  )
}

export default Payment