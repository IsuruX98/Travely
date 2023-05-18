import React from 'react'
import { FaEnvelope, FaSearch,FaRegBell } from 'react-icons/fa'

export const DashbordView = () => {
  return (
    <div className='flex item-center justify-between h-[70px] shadow-lg px-[25px]'>
        <div className='flex items-center rounded-[5px]'>
            <input type="text" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] md:w-[350px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search' />
            <div className='bg-[#636363] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'> 
                <FaSearch color='white'/>
            </div>
        </div>
         <div className='flex items-center gap-[15px] '>
            <div className='flex items-center gap-[25px]'>
            <FaRegBell color='#636363'/>
            <FaEnvelope color='#636363'/>
         </div>
          <div>

          </div>
          </div>
    </div>
  )
}
