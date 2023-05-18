import React from 'react'
import { DashbordView } from '../components/DashbordView';
import Sidebar from '../components/Sidebar';
import { Employee } from '../components/Employee';

export const EmployeeList = () => {
  return (
    <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <Employee/>
        

        
       </div>
      
    </div>
   
  )
}
