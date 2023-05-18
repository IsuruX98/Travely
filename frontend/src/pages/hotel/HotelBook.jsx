import React from 'react'
import { FaLock } from 'react-icons/fa'

const HotelBook = () => {
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

                    <h1 className='font-semibold text-[#565656] lg:text-lg pt-6'>Expiry Dare</h1>
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
                                            <p>Hotel fee</p>
                                            <p className='ml-auto'>Rs.4000.00</p>
                                        </div>

                                        <div className='flex gap-28 border-b py-2'>
                                            <p>Room fee</p>
                                            <p className='ml-auto'>Rs.0.00</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-bold py-2'>Total</p>
                                            <p className='ml-auto'>Rs. 40000.00</p>
                                        </div>
                   </div>
                      <button className='bg-[#41A4FF] rounded-lg text-white p-2 w-full'>Confirm and Pay Now</button>
                      <div className='flex items-center pt-2'>
                        <FaLock className='text-[#b4b4b4]'/>
                      <h1 className='text-[#b4b4b4]  font-extralight pl-4'>Payments are secured and encrypted.</h1>
                      </div>
                </div>

                    

      </form>
 </div>

    
  )
}

export default HotelBook