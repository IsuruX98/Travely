import React, {useState} from 'react'

import Swal from 'sweetalert2'
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom';




const EditVehicle = () => {


  const { state } = useLocation();
  console.log(state)

  const navigate = useNavigate();
  

    const [price, setPrice] = useState(state.price);
    const [location, setLocation] = useState(state.location);
    const [description, setDescription] = useState(state.description);


    function sendData(e){
        e.preventDefault();

        const updateVehicle = {price, location, description}

      axios
      .patch(`/vehicle/${state._id}`, updateVehicle ) 
      .then(() => {
        Swal.fire({
          
          icon: 'success',
          title: 'Your Vehicle updated Successfully',
          showConfirmButton: false,
          timer: 2000
        }) 
        navigate('/vehicle')

      })
      .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err 
          })

      });
    }


  return (
    <div>
        <form className='p-4 text-[#383838]  justify-center lg:px-96' onSubmit={sendData}>
        <h1 className='text-lg lg:text-2xl font-bold py-6  text-center'>Edit Vehicle</h1>
            
            <label for className='lg:text-lg text-left'>Price</label>
            <input type='number' className='border rounded-lg w-full p-2 mb-6 mt-2' defaultValue={state.price} placeholder='12500' required onChange={(e) => setPrice(e.target.value) } />

            
            <label for className='lg:text-lg text-left'>Location</label>
            <input type='text' className='border rounded-lg w-full p-2 mb-6 mt-2' defaultValue={state.location} placeholder='Colombo' required onChange={(e) => setLocation(e.target.value) }/>

            <label for className='lg:text-lg text-left'>Description</label>
            <textarea rows = '4' className='border rounded-lg w-full p-2 mb-6 mt-2' defaultValue={state.description} placeholder='Add your description here' required onChange={(e) => setDescription(e.target.value) }/>

            <div className='flex flex-col lg:flex-row items-center justify-between lg:my-6'>
          <button className="bg-[#41A4FF] text-white rounded-md font-bold p-3 my-5 lg:my-0  w-full">
                Update Vehicle
              </button>
          <button className="bg-[#636363] text-white rounded-md font-bold p-3 lg:ml-6   w-full mb-12 lg:mb-0" type = 'reset'>
                Reset
              </button>
          </div>



        </form>
    </div>
  )
}

export default EditVehicle