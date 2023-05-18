import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import HotelReserve from "./HotelReserve";

const HotelView = () => {

  const [data, setData] = useState([]);
  const location = useLocation();
  const date= location.state;
 
  console.log(date)
  const { id } = useParams();
  const {user}=useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openBook,setOpenBook]=useState(false);

  const checkInDate = new Date(date.checkInDate);
const checkOutDate = new Date(date.checkOutDate);
 console.log(user)
 

  const miliseconds_per_day = 1000 * 60 * 60 * 24;

  function dayDifference(date1,date2){
    const timeDifference=Math.abs(date2.getTime()-date1.getTime());
    const differenceDays=Math.ceil(timeDifference/miliseconds_per_day);
    return differenceDays;
  }

    
  const day_difference=(dayDifference(checkInDate,checkOutDate))
  console.log(day_difference)

  

  useEffect(() => {
    axios
      .get(`/hotels/find/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(data.HotelImg);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    if(user){{setOpenBook(true)}



    }
    else{
      navigate("/login");

    }
  }

  return (
    <div>
      <div className="lg:p-24 ">
        <h1 className="ml-18 md:ml-20 lg:ml-20 text-center lg:text-left py-5 font-bold text-3xl">
              {data.name} {data.type}
            </h1>
        <div className="flex justify-center items-center w-full flex-col lg:flex-row pt-12 lg:pt-0">
          <img
            src={`http://localhost:5000/api/hotels/images/${data.HotelImg}`}
            alt="Hotel Image"
            className=" w-[320px] md:w-[700px]  lg:w-[800px] rounded-lg mb-10"
          />

          <div className="lg:px-24">
            
            <h1 className="text-center md:text-left py-5 font-bold text-1.5xl">
              {data.title}
            </h1>
            <p className="max-w-[320px] md:max-w-[700px] lg:max-w-[600px] text-justify">
              {data.description}
            </p>
            <div className="flex items-center">
              <h1 className="font-bold py-5">City : </h1>
              <h1 className="px-4">{data.city}</h1>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex items-center">
                <h1 className="font-bold">checkIn Date :</h1>
                <h1 className="px-4">{date.checkInDate}</h1>
              </div>

              <div className="flex items-center lg:px-8">
                <h1 className="font-bold">checkout Date</h1>
                <h1 className="px-4">{date.checkOutDate}</h1>
              </div>
            </div>

            <div className="flex flex-col md:flex-row py-4">
              <h1 className="text-[#41A4FF] font-semibold">Perfect for a {day_difference} night stay!</h1>
            </div>

            <div className="flex flex-col md:flex-row py-4">
              <h1 className="text-[#636363]">
                {" "}
                Excellent location – {data.distance}Km from {data.city}
              </h1>
            </div>

            <div className="flex"></div>

            <div className="flex flex-col md:flex-row  py-4 justify-between lg:items-center">
              <div className="flex items-center">
                <h1 className="font-bold text-2xl">
                  Book a stay over Rs.{data.cheapestPrice *day_difference}
                </h1>
                <h1 className="ml-3 md:text-1xl">/for {day_difference} days</h1>
              </div>
            </div>
            
              <button onClick={handleClick} className="bg-[#41A4FF] text-white rounded-md lg:ml-8 font-bold p-3 my-5 lg:my-0 w-full md:w-[350px] md:my-0 lg:w-[300px] ">
                Reserve now
              </button>
            
          </div>
        </div>
        
      </div>
      <h1 className="text-center lg:text-left py-5 font-bold text-2xl ml-10">
              Images of our hotel
            </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
  {data.HotelImgs &&
    data.HotelImgs.map((image, index) => (
      <img
        src={`http://localhost:5000/api/hotels/images/${image}`}
        alt={`Hotel Image ${index}`}
        key={index}
        class="ml-10 w-64 h-64 rounded-lg mb-2"
      />
    ))}
</div>
      { openBook &&  <HotelReserve setOpen={setOpenBook} hotelId={id} checkInDate={date.checkInDate} checkOutDate={date.checkOutDate} date_difference={day_difference}/>}

    </div>
  );
};

export default HotelView;
