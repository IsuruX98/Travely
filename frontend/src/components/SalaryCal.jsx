import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';




function SalaryCal() {

  const [Name, setName] = useState('');
  const [Eid, setEid] = useState('');
  const [ Nic, setNic] = useState('');
  const [JobPosition, setJobPosition] = useState('');
  const [Numberaofdates, setNumberaofdates] = useState('');
  const [OtHours, setOtHours] = useState('');
  const [BasicSalary,setBasicSalary]=useState('');
  const[NetSalary,setNetsalary]=useState('')
  const navigate = useNavigate()



    const{data,loading,error}=useFetch("/employee");
const newdata = data
console.log("aaa")
console.log(newdata)
      
     
    useEffect(() => {
    if (JobPosition === 'Admin' || JobPosition === 'Manager' || JobPosition === 'Maintaince Staff') {
      const salaryRate = parseInt(BasicSalary, 10) / 312;
      const otRate = 5;
      const netSalary = salaryRate * parseInt(Numberaofdates, 10) + otRate * parseInt(OtHours, 10);
      setNetsalary(netSalary.toFixed(2)); 
    }
  }, [JobPosition, BasicSalary, Numberaofdates, OtHours]);


  
    const handleSubmit = (e) => {
    e.preventDefault();

     const newSalary = {
      Name,
      Eid,
      Nic,
      JobPosition,
      Numberaofdates,
      OtHours,
      BasicSalary,
      NetSalary
    };
  

    


const filteredData = newdata.some((employee) => employee.Eid ==Eid && employee.BasicSalary == BasicSalary && employee.Nic ==  Nic && employee.Name == Name);

    const maxDays = 26;
    const maxHours=130;
    const  NicPattern = /^(?:\d{9}[vV]|\d{12})$/;
    const namePattern = /^[a-zA-Z ]+$/;
    const numberPattern = /^\d+$/;
  
    Swal.fire({
      title: 'Do you want to Calculate the Employee Salary?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't Submit`,
    }).then((result) => {
      if (result.isConfirmed && filteredData ) {

        if(!Name ||   !Nic ||  !Eid || !JobPosition || !Numberaofdates || !OtHours || !BasicSalary){
           Swal.fire('Error', 'Please fill all the required fields', 'error');
        }
       
       else if (!Name.match(namePattern)){
      Swal.fire({
        icon: 'error',
        title: 'Invalid Employee Name Format',
        text: 'Please enter a Employee Name',
      });}
      else if(Eid.length != 5 ){
      Swal.fire({
        icon: 'error',
        title: 'Invalid Employee Id',
        text: 'Please enter a Employee ID',
      });}
      else if(  !Nic.match(NicPattern)){
      Swal.fire({
        icon: 'error',
        title: 'Invalid  Nic',
        text: 'Please enter a  Nic',
      });}
       else if(parseInt(OtHours)>maxHours){
      Swal.fire({
        icon: 'error',
        title: 'Number of Hours cannot exceed 130',
        text: 'Please enter OT Hours',
      });}
      else if(parseInt(Numberaofdates)>maxDays){
      Swal.fire({
        icon: 'error',
        title: 'Number of Days cannot be exceed 26',
        text: 'Please enter working Days',
      });}
      else if(!BasicSalary.match(numberPattern)){
      Swal.fire({
        icon: 'error',
        title: 'Salary should be valid number',
        text: 'Enter valid salary',
      });}
       else
       {   


        console.log(newSalary)
          axios
          .post('/salary/add', newSalary)
          .then(() => {
            Swal.fire('Employee Salary has been successfully Saved!', '', 'success');
            navigate("/finance/salarySheet")
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.message,
            });
          });}
        
      } else if (result.isDenied) {
        Swal.fire('Details are not saved', '', 'error');
      }
       else if(!filteredData ){
         Swal.fire({
         icon: 'error',
         title: 'Employee Doesnt Exisit',
         text: 'Enter Correct Data',
       });


       }
    });

   
    setName('');
    setEid('');
    setNic('');
    setJobPosition('');
    setNumberaofdates('');
    setOtHours('');
    setBasicSalary('');


 
  };


  return (
      <div className='pt-[25px] px-[25px] bg-[#F8F9FC] mt-3 ' >
        <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Salary Calculation</h1>
        
         </div>


    
<div class="flex items-center justify-center p-12">
  
  <div class="mx-auto w-full max-w-[550px]">
    <form action="" method="POST" onSubmit={handleSubmit}>
     
      <div class="-mx-3 flex flex-wrap">

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="fName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Employee Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="lName"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Employee ID
            </label>
            <input
              type="text"
              name="Eid"
              id="EID"
              placeholder=""
              onChange={(e) => setEid(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
    
         <div className="mb-5">
  <label
    htmlFor=  "Nic"
    className="mb-3 block text-base font-medium text-[#07074D]"
  >
    Nic
  </label>

   <input
              type="text"
              name=  "Nic"
              id=  "Nic"
              placeholder=""
              onChange={(e) => setNic(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
  
</div>


     <div className="mb-5">
  <label
    htmlFor="designation"
    className="mb-3 block text-base font-medium text-[#07074D]"
  >
    Job Position
  </label>
  <select
    id="designation"
    name="Designation"
    onChange={(e) => setJobPosition(e.target.value)}
    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  >
    
    <option value="Admin">Admin</option>
    <option value="Manager">manager</option>
    <option value="Maintaince Staff">Maintaince Staff</option>
  </select>
</div>

      <div className="mb-5">
  <label
    htmlFor="salary"
    className="mb-3 block text-base font-medium text-[#07074D]"
  >
    Basic Salary
  </label>

   <input
              type="text"
              name="BasicSalary"
              id="basicSalary"
              placeholder="$"
              onChange={(e) => setBasicSalary(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
  
</div>




      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="date"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              No of Dates
            </label>
            <input
              type="number"
              name="Date"
              id="date"
              onChange={(e) => setNumberaofdates(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>


        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="time"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              OT Hours
            </label>
            <input
              type="number"
              name="oTh"
              id="OtH"
              onChange={(e) => setOtHours(e.target.value)}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="mb-5">
        
        <div class="flex items-center space-x-6">
          
         
        </div>
      </div>

      <div>
        <button
        type='submit'
          class="hover:shadow-form rounded-md bg-[#41A4FF] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Calculate
        </button>
      </div>
    </form>
  </div>
</div>
        </div>

        
  )
}

export default SalaryCal