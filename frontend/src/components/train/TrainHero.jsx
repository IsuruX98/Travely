import React from "react";
import trainMainImg  from "../../assets/TrainImages/HeroTrain.jpg"

const TrainHero = ()=>{
    return(
        <div className='h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover'
             style={{backgroundImage:`url(${trainMainImg})`}}
        >
        <div className='p-8 pt-28 md:p-24 md:pt-36 lg:p-36'>
            <h2 className='text-3xl md:text-5xl  font-extrabold uppercase  text-[#41A4FF]'>
                Easily Book your<br/>Train Tickets online<br/>with 
            </h2>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase text-[#DEEFFF] py-4'>
                Travely
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, elementum odio. Vestibulum ac fringilla enim, ac aliquet ligula. Nunc aliquam sodales blandit. Praesent eu ligula id nisl suscipit iaculis vel sed urna. Donec id nulla luctus, interdum dolor quis, cursus ligula.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet dui pulvinar, volutpat turpis vel, elementum odio.</p>
        </div>        
    </div> 
    )
}


export default TrainHero;