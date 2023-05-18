import React,{ useContext, useEffect, useState }  from 'react'
import { useLocation, useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import {
 
  faCalendarDays,
 
} from "@fortawesome/fontawesome-free";

import useFetch from '../../hooks/useFetch';

export const HotelSearchBar = ({type}) => {





  const [city, setDestination] = useState("");
  const [Hoteltype, setHotelType] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  console.log(city)
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
  const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]; //get tomorrow date
  const [searchClicked, setSearchClicked] = useState(false);
  
  const date = {checkInDate, checkOutDate}

  const {data} = useFetch(`hotels/get/${city}`)

    

    const navigate = useNavigate();
    const location = useLocation();
    


  

  
  useEffect(() => {
    search();
    if (searchClicked && data ) {
      navigate('/hotelhome', { state: { date, data } });
    }
  }, [data, navigate, date]);

  const search = () => {
    if (checkInDate && checkOutDate) {
      setSearchClicked(true);
    }
  };
 
 

  return (
    <div className="bg-white mt-4 lg:mt-[0px] px-8 shadow-lg max-w-[1240px]  p-4 lg:text-left text-center h-full  items-center   mx-auto rounded-lg">
      <form className="flex flex-col lg:flex-row justify-between px-4">
      <div className='flex flex-col'>
          
         
          </div>
        <div className="flex flex-col ">
          <label for="Location" className="py-3 ml-5">
            Location
          </label>
          <input
            type="text"
            className="border rounded-md  p-3 lg:w-[300px] w-full"
            placeholder="Where are you going?"
            onChange={(e) => setDestination(e.target.value)}
          ></input>
        </div>
       

        <div className="flex flex-col">
          <label for="checkInDate" className="py-3 ml-5">
            Check-In Date
          </label>
          <input
            type="date"
            min={currentDate} 
            className="border rounded-md p-3 w-full"
            onChange={(e)=> setCheckInDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label for="returnDate" className="py-3 ml-5">
            Check-Out Date
          </label>
          <input type="date" className="border rounded-md p-3 w-full"
          min={tomorrowDate}
          onChange={(e)=> setCheckOutDate(e.target.value)} />
        </div>

        <div className="lg:w-24 flex items-center w-full">
         
        </div>
      </form>
    </div>
  )
}
