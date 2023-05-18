import React from 'react'
import { Link } from 'react-router-dom'
import {  FaStar } from "react-icons/fa";

const VehicleCard = (props) => {

  return (
    <div className='flex flex-col w-[300px] md:w-[300px] items-center border shadow-lg m-auto mb-8  rounded-lg bg-white'>
        <img src = {`vehicle/images/${props.vehicleMainImg}`} alt='vehicle' className='rounded-lg'/>
        
        <h1 className='py-2 text-1xl font-bold border-b'>{props.brand + " " + props.model}</h1>
        {/* <div className='flex items-center'>
            <div className='flex'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            </div>
            <p className='px-2'>4.5</p>
        </div> */}
        <div className='flex '>
            <p className=''>{props.capacity} People</p>
            <p className='px-4'>{props.transmissionType}</p>
        </div>
        <p>{props.fuelType}</p>
        <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold py-3'>Rs. {props.price}</h1>
        <h1 className=''>/per day</h1>
        </div>
        <Link to ={`/vehicle/book/${props.id}`} className='w-full'>
        <button className='bg-[#41A4FF] text-white rounded-md font-medium py-3 w-full'  >Reserve Now</button>
        </Link>
    </div>

    
  )
}

export default VehicleCard