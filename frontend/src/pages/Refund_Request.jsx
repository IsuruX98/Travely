import React from 'react'
import { DashbordView } from '../components/DashbordView';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
export const Refund_Request = () => {
  return (

     <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        

        
       </div>
      
    </div>
   
  )
}


