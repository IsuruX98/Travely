import React from 'react'
import carMainImg from '../../assets/vehicleImages/carmain.png'
import evImg from '../../assets/vehicleImages/ev.png'


const VehicleHero = () => {
  return (
    <div className='bg-[#DEEFFF] h-full flex items-center justify-between w-full flex-col lg:flex-row'>
        <div className='p-8 pt-18 md:p-24 md:pt-36 lg:p-24'>
            <h1 className='text-3xl md:text-5xl uppercase font-extrabold text-[#272727]'>
                Fast and easy way to
            </h1>
            <h1 className='text-3xl md:text-5xl uppercase font-extrabold text-[#41A4FF] py-4'>
                Rent a car
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify'>Experience hassle-free vehicle reservations with our intuitive web app. Whether you're planning a road trip, a business trip, or simply need a reliable ride, our platform offers a vast selection of vehicles to choose from. With easy booking, flexible pickup and return options, and the ability to customize your reservation with add-ons like drivers, our web app ensures a seamless and convenient experience. Say goodbye to tedious reservation processes and enjoy the freedom of reserving your perfect vehicle with just a few clicks. Start your journey with our vehicle reservation web app today.</p>
            
            <div className='flex py-4 items-center justify-center lg:justify-start'>
                <img src={evImg} className='w-14 h-14' alt='evlogo'/>
                <h2 className='py-4 font-bold text-auto md:text-2xl px-4 '>Try EV and Save Atmosphere</h2>
            </div>
        </div>

        <div>
            <img src={carMainImg} className='lg:w-[600px] md:w-[650px] ' alt='mainCarImage'/>
        </div>
    </div>
    
  )
}

export default VehicleHero