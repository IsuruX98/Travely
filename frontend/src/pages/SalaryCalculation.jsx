import React from 'react'
import { DashbordView } from '../components/DashbordView';
import Sidebar from '../components/Sidebar';
import SalaryCal from '../components/SalaryCal';


export const SalaryCalculation = () => {
  return (
    <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <SalaryCal/>
        

        
       </div>
      
    </div>
   
  )
}
