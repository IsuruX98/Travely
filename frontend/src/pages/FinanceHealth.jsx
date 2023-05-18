import React from 'react'
import { DashbordView } from '../components/DashbordView';
import Sidebar from '../components/Sidebar';
import FinanceH from '../components/FinanceH';

export const FinanceHealth= () => {
  return (
    <div className="flex">
      <div className='basis-[18%]  border'>
          <Sidebar/>
       </div>
       <div className='basis-[82%] border'>
        <DashbordView/>
        <FinanceH/>
        

        
       </div>
      
    </div>
   
  )
}
