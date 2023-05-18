
import axios from "axios";
import Swal from 'sweetalert2'
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";

const VehicleBook = () => {
  const { state } = useLocation();

  console.log(state)

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  console.log("data to be send" + data)

 // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/vehicle/${state._id}`)
      .then((response) => {
        setData(response.data);
        console.log(data.vehicleMainImg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = () => {
    axios
      .delete(`/vehicle/${state._id}`)
      .then(() => {
        Swal.fire({
          
          icon: "success",
          title: "Your Vehicle Deleted Successfully",
          showConfirmButton: false,
          timer: 2000,
          
        }); navigate('/vehicle')
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: err,
        });
      });
  };

  const editHandler = () => {
    navigate(`/vehicle/edit/${state._id}`, {state : data});

    // axios
    //   .patch(`/vehicle/${state._id}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="lg:p-24 ">
      <div className="flex justify-center items-center w-full flex-col lg:flex-row pt-12 lg:pt-0">
        <img
          src={`http://localhost:5000/api/vehicle/images/${state.vehicleMainImg}`}
          alt="vehMainImg"
          className="w-[320px] md:w-[700px] lg:w-[600px] rounded-lg"
        />

        <div className="lg:px-24">
          <h1 className="text-center lg:text-left py-5 font-bold text-2xl">
            {state.brand + " " + state.model}
          </h1>
          <p className="max-w-[320px] md:max-w-[700px] lg:max-w-[600px] text-justify">
            {state.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="font-bold py-5">Location : </h1>
              <h1 className="px-4">{state.location}</h1>
            </div>

            <div className="flex items-center">
              <h1 className="font-bold text-2xl">Rs.{state.price}</h1>
              <h1 className="md:text-1xl">/per day</h1>
            </div>
          </div>

          <div className="flex"></div>

          <div className="flex flex-col md:flex-row   py-4 justify-between lg:items-center">
            <button
              className="bg-[#41A4FF] text-white rounded-md  font-bold p-3 my-5 lg:my-0 w-full md:w-[350px] md:my-0 lg:w-full"
              onClick={editHandler}
            >
              Edit
            </button>

            <button
              className="bg-red-500 text-white rounded-md lg:ml-8 font-bold p-3 my-5 lg:my-0 w-full md:w-[350px] md:my-0 lg:w-full"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleBook;
