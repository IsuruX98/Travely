import React from 'react'
import { DashbordView } from '../components/DashbordView';
import Sidebar from '../components/Sidebar';
import SalaryS from '../components/SalaryS';

export const SalarySheet = () => {
  return (
    <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <SalaryS/>
        

        
       </div>
      
    </div>
   
  )
}
