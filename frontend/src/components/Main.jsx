import React from 'react'
import { DashbordView } from './DashbordView';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
export const Main = () => {
  return (

     <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <Dashboard/>

        
       </div>
      
    </div>
   
  )
}
