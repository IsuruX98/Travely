import React from "react";
import { Link } from 'react-router-dom'
import {  FaStar,FaTrain } from "react-icons/fa";
import {WiTime3} from "react-icons/wi";
import {MdAirlineSeatReclineNormal} from "react-icons/md"
import veh1 from '../../assets/TrainImages/singletrain.jpg'


const TrainCardAdmin = (props)=>{

    return(
        <div className='flex flex-col w-[300px] md:w-[300px] items-center border shadow-lg m-auto mb-8  rounded-lg bg-white'>
        <img src={veh1} alt='vehicle' className='rounded-lg'/>
        <h1 className='py-2 text-1xl font-bold border-b'>{props.trainName}</h1>
        <div className='flex items-center'>
            <FaStar/>
            <p className='px-2'>4.2</p>
        </div>
        <div className='flex '>
            <FaTrain/>
            <p>{props.from}  &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <FaTrain/>
            <p>{props.to}</p>
        </div>
        <div className='flex '>
            <WiTime3/>
            {props.arrivalTime}  &nbsp;&nbsp;&nbsp;&nbsp;
            <WiTime3/>
            {props.depatureTime}
        </div>
        <div className='flex '>
            <MdAirlineSeatReclineNormal/> 
            <p> {props.noOfSeats} seats are available</p>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='text-2xl font-bold py-3'>{props.price}</h1>
        </div>
        <Link to ={`/adminTrain/${props.id}`} className='w-full'>
            <button className='bg-[#41A4FF] text-white rounded-md font-bold py-3 w-full'>Open</button>
        </Link>
    </div>
    )
}

export default TrainCardAdmin;