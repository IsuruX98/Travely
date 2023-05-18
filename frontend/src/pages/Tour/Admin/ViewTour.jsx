import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateTour = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const data = state.data.oneTour;

  const handleDelete = async () => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        await axios.delete(`/tours/${state.data.oneTour._id}`);
        Swal.fire("Tour Deleted!", "", "success");
        navigate("/tours");
      } catch (err) {
        console.log(err);
        Swal.fire(err.message, "", "error");
      }
    }
  };

  const getTour = async () => {
    navigate("/tour/update", { state: state });
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 md:px-24 p-4 sm:py-8 ">
        <div className="flex flex-col justify-center items-center md:py-28 py-8 gap-5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div>
            <img
              className="w-600 h-400 rounded-3xl shadow-lg border-4 border-blue-500 object-cover"
              src={`${data.img}`}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 xl:ps-20 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <h1>
            {" "}
            <b>ID :</b> {data._id}
          </h1>
          <h1>
            {" "}
            <b>Name :</b> {data.name}
          </h1>
          <h1>
            {" "}
            <b>Added By : </b> {data.currentUser}
          </h1>
          <h1>
            {" "}
            <b>Price : </b>
            {data.price}
          </h1>
          <h1>
            {" "}
            <b>Category : </b> {data.category}
          </h1>
          <h1>
            {" "}
            <b>Languages :</b> {data.languages}
          </h1>
          <h1>
            {" "}
            <b>maximum Group Size : </b> {data.groupCount}
          </h1>
          <h1>
            {" "}
            <b>Tour Duration : </b> {data.duration}
          </h1>
          <h1>
            {" "}
            <b>Introduction : </b> {data.introduction}
          </h1>
          <h1>
            {" "}
            <b>Description : </b> {data.description}
          </h1>

          <div className="flex md:flex-row gap-5 md:mt-8">
            <button
              className="bg-blue-500 p-3 rounded-xl text-white font-bold"
              onClick={getTour}
            >
              Update Details
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 p-3 rounded-xl text-white font-bold"
            >
              Delete Tour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTour;
