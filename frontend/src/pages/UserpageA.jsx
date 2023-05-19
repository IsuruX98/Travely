import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

const UserpageA = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const createdat = state.createdAt;
  const updatedat = state.updatedAt;

  const createdatnew = moment(createdat).fromNow();
  const updatedatnew = moment(updatedat).fromNow();

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
        await axios.delete(`users/${state._id}`);
        Swal.fire("User Deleted!", "", "success");
        navigate("/users");
      } catch (error) {
        console.log(error);
        Swal.fire("Something went wrong!", "", "error");
      }
    }
  };

  const getUser = async () => {
    navigate("/update", { state: state });
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 md:px-24 p-4 sm:py-8">
        <div className="flex flex-col justify-center items-center md:py-28 py-8 gap-5 md:m-20 m-5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div>
            <img
              className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-500 object-cover"
              src={`${state.img}`}
              alt=""
            />
          </div>
          <div className="text-center mx-6 pt-3">
            <h1 className="text-lg font-bold">Available Points</h1>
            <h3 className="text-blue-500 font-bold text-3xl">1500</h3>
          </div>
          <div className="text-center">
            <h1 className="text-lg font-bold">Account Status</h1>
            <h3 className="text-blue-500 font-bold text-3xl">Blue</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5 xl:pl-20 rounded-lg bg-white p-6">
          <h1 className="text-3xl font-bold">Profile Details</h1>
          <h3 className="text-blue-500 text-xl font-bold">{state.type}</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-10 mt-8">
            <div className="">
              <h1 className="text-lg font-bold ">ID :</h1>
              <p className="text-xl">{state._id}</p>
              <h1 className="text-lg font-bold mt-4">Name :</h1>
              <p className="text-xl">{state.name}</p>
              <h1 className="text-lg font-bold mt-4">Email :</h1>
              <p className="text-xl">{state.email}</p>
              <h1 className="text-lg font-bold mt-4">Mobile :</h1>
              <p className="text-xl">{state.mobile}</p>
              <h1 className="text-lg font-bold mt-4">Country :</h1>
              <p className="text-xl">{state.country}</p>
            </div>
            <div>
              <h1 className="text-lg font-bold lg:mt-0 mt-4">Is Admin :</h1>
              <p className="text-xl">{state.isAdmin.toString()}</p>
              <h1 className="text-lg font-bold mt-4">Type :</h1>
              <p className="text-xl">{state.type}</p>
              <h1 className="text-lg font-bold mt-4">Created at :</h1>
              <p className="text-xl">{createdatnew}</p>
              <h1 className="text-lg font-bold mt-4">Updated at :</h1>
              <p className="text-xl">{updatedatnew}</p>
            </div>
          </div>

          <div className="flex md:flex-row gap-5 md:mt-8 mb-6">
            <button
              className="bg-blue-500 py-3 px-6 rounded-md text-white font-bold hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={getUser}
            >
              Update Details
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 py-3 px-6 rounded-md text-white font-bold hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Delete User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserpageA;
