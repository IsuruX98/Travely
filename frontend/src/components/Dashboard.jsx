import React from 'react'
import {HiDownload } from "react-icons/hi";
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Piechart from './Piechart';

const data = [
  {
    name: 'January',
    Expected_revenue: 4000,
     Real_revenue: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    Expected_revenue: 3000,
     Real_revenue: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    Expected_revenue: 2000,
     Real_revenue: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    Expected_revenue: 2780,
     Real_revenue: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Expected_revenue: 1890,
     Real_revenue: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    Expected_revenue: 2390,
     Real_revenue: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Expected_revenue: 3490,
     Real_revenue: 4300,
    amt: 2100,
  },
   {
    name: 'Auguest',
    Expected_revenue: 2500,
     Real_revenue: 4358,
    amt: 2100,
  },
   {
    name: 'September',
    Expected_revenue: 3490,
     Real_revenue: 4220,
    amt: 2150,
  },
   {
    name: 'Octomber',
    Expected_revenue: 3420,
     Real_revenue: 4380,
    amt: 2500,
  },
   {
    name: 'November',
    Expected_revenue: 3490,
     Real_revenue: 4300,
    amt: 2100,
  },
   {
    name: 'December',
    Expected_revenue: 3490,
    Real_revenue: 4300,
    amt: 2100,
  },
  
];




const Dashboard = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC] mt-3 ' >
        <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
            
          
        </div>
          <div className=' grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>

             <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#25db47] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                <div>

                     <h2 className='text-[11px] leading-[17px] font-bold'>Earnings(Monthly)</h2>
                      <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color="" />
             </div>
               <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#edea50] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                <div>

                     <h2 className='text-[11px] leading-[17px] font-bold'>Earnings(Anually)</h2>
                      <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$100,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color="" />
             </div> <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#df4e4e] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                <div>

                     <h2 className='text-[11px] leading-[17px] font-bold'>Expenses</h2>
                      <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$60,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color="" />
             </div> <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                <div>

                     <h2 className='text-[11px] leading-[17px] font-bold'>Profit</h2>
                      <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                </div>
                <FaRegCalendarMinus fontSize={28} color="" />
             </div>
            </div>

            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]' >
                    <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                        <h2>Earning overview</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer'/>
                    </div>
            <div>
                       <LineChart
          width={750}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Expected_revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Real_revenue" stroke="#82ca9d" />
        </LineChart>
        </div>
            </div>
        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
            <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                <h2>Revenue Resources</h2>
                 <FaEllipsisV color='gray' className='cursor-pointer'/>
            </div>
            <div>
                <Piechart/>
            </div>

        </div>
            </div>
        </div>
  )
}

export default Dashboard