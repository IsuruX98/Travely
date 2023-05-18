import React from 'react';
import {FaTachometerAlt,FaWpforms,FaBook,FaCalculator,FaListUl,FaSignOutAlt,FaMoneyCheck} from "react-icons/fa"
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='bg-[#F4F4F4] h-[100%] px-[25px]'>
        <div className='px-[15px] py-[30px] flex place-items-center justify-center border-b-[1px] border-[#FFFFFF]/[1]'>
            <h1 className='text-[#41A4FF] text-[40px] leading-[24px] font-extrabold cursor-pointer'>Travely</h1>
        </div>
         <div className='flex flex-col px-[15px] py-[30px] place-items-center justify-center '>
           
      
<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-27 h-27 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

      <div className='flex items-center pt-2 text-[17px] font-bold ' >
        <h1>Dinidu Ekanayaka</h1>
      </div>
        <div className=' text-sm' >
        <h1>Finance manager</h1>
      </div>
      <div className=' items-start mt-4 ' >
        <Link to="/finance" className='btn flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaTachometerAlt color='#636363' />
          <p>Dashbord</p>
          
        </Link>
          <Link to="/finance/refund" className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaWpforms color='#636363'/>
          <p>Refund Request</p>
        </Link>
         <Link  to="/finance/salary"className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaCalculator color='#636363'/>
          <p>Salary Calculation</p>
        </Link>
        <Link  to="/finance/employee"className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaListUl color='#636363'/>
          <p>Employee List</p>
        </Link>
        <Link  to="/finance/salarySheet"className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaBook color='#636363'/>
          <p>Salary sheet</p>
        </Link>

         <Link  to="/finance/FinanceHealth"className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1]'>
           <FaMoneyCheck color='#636363'/>
          <p>Finance Health</p>
        </Link>

        <Link  to=""className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#FFFFFF]/[1] mt-10'>
           <FaSignOutAlt color='#636363'/>
          <p>Log Out</p>
        </Link>


      </div >
          
       
        </div>
        
    </div>
  )
}

export default Sidebar