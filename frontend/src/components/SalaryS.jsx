import React,{useState,useEffect} from 'react'
import jspdf from "jspdf";
import "jspdf-autotable";
import {HiDownload } from "react-icons/hi";
import useFetch from '../hooks/useFetch';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

const keys =["Name","Email","Eid","Nic","JobPosition","Numberaofdates","OtHours"," BasicSalary","NetSalary"]

const SalaryS = () => {

    const [query,setQuery] =useState("");
    const{data,loading,error}=useFetch("/record");
    const navigate = useNavigate();


    

    function generatePDF(data) {
    const doc = new jspdf();
    const tableColumn = [
      "Name",
      "Eid",
      "Nic",
      "Job Position",
      "Working Dates",
      "OT hours",
      "Basic Salary",
      "Net Salary"
    ];
    const tableRows = [];

    data
      .slice(0)
      .reverse()
      .map((data, index) => {
        const RefundData = [
          index + 1,
          data.Name,
          data.Eid,
          data.Nic,
          data.JobPosition,
          data.BookingId,
          data.Numberaofdates,
          data.OtHours,
          data.BasicSalary,
          data.NetSalary
        
        ];
        tableRows.push(RefundData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("Traverly-Salary-Sheet ", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Salary-sheet-Report_${dateStr}.pdf`);
  }

  const salaryDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete this Record!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/salary/delete/${id}`)
            .then((res) => {
              Swal.fire("Deleted!", res.data.status, "success");
              navigate("/finance");
            })
            .catch((err) => {
              Swal.fire("Not Deleted!", err.message, "error");
            });
        }
          })}

  return (
    
     <div className='pt-[25px] px-[25px] bg-[#F8F9FC] mt-3 ' >
        <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Salary Sheet</h1>
          <div className='flex  items-center bg-[#41A4FF] gap-1 px-2' >
              <button className='bg-[#41A4FF] rounded-[3px]'>Generate Reports</button>
               <HiDownload color='white' className='cursor-pointer p-[5]'   onClick={() => {
              generatePDF(data);
            }}
/>
            </div> 
         </div>

            <div className='mt-5'>

            
            <div class="mb-3">
  <div class="relative mb-4 flex w-[380px] flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" 
      onChange={(e) => setQuery(e.target.value)}
     />

    <span
      class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </div>
</div>


                 
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
     
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Eid
                </th>
                <th scope="col" class="px-6 py-3">
                    Nic
                </th>
                <th scope="col" class="px-6 py-3">
                    JobPosition
                </th>
               
                <th scope="col" class="px-6 py-3">
                    working dates
                </th>
                <th scope="col" class="px-6 py-3">
                    OT Hours
                </th>
                
                 <th scope="col" class="px-6 py-3">
                    Basic Salary
                </th>
                 <th scope="col" class="px-6 py-3">
                    Net Salary
                </th>
                 <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
           
                                {data.filter(Salary => Salary.Name && Salary.Name.toLowerCase().includes(query)).map((Salary) => (


                          
                           <tr  key={Salary._id}  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
               
                <td class="px-6 py-4">
                      {Salary.Name}
                </td>
              
                <td class="px-6 py-4">
                        {Salary.Eid}
                </td>
                <td class="px-6 py-4">
                         {Salary.Nic}
                </td>
                <td class="px-6 py-4">
                        {Salary.JobPosition}
                </td>
                         
                 <td class="px-6 py-4">
                         {Salary.Numberaofdates}
                </td>

                <td class="px-6 py-4">
                         {Salary.OtHours}
                </td>
                 <td class="px-6 py-4">
                         {Salary.BasicSalary}
                </td>
                <td class="px-6 py-4">
                         {Salary.NetSalary}
                </td>
               
                <td class="px-6 py-4">
                  
                    <button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline " onClick={() => salaryDelete(Salary._id)}>Delete </button>
                    
                </td>
            </tr>
          

             ))}
       
        
        </tbody>
    </table>
</div>

            
           </div>

    </div>
  )
}

export default SalaryS