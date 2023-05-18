import React from 'react'
import { DashbordView } from './DashbordView';
import Sidebar from './Sidebar';
import RefundForm from './RefundForm';

const Refund = () => {
  return (
    <div className="flex">
      <div className='basis-[18%] h-[100vh] border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <RefundForm/>

        
       </div>
      
    </div>
  )
}

export default Refund