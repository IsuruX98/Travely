import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import moment from "moment";
import Swal from "sweetalert2";
import Spinner from "../components/spinner/LoadingSpinner";

const UpdateuserA = () => {
  const { state } = useLocation();

  const [loading2, setLoading2] = useState(false);

  const createdat = state.createdAt;
  const updatedat = state.updatedAt;

  const createdatnew = moment(createdat).fromNow();
  const updatedatnew = moment(updatedat).fromNow();

  const navigate = useNavigate();

  const [name, setName] = useState(state.name);
  const [country, setCountry] = useState(state.country);
  const [isAdmin, setisAdmin] = useState(state.isAdmin);
  const [mobile, setMobile] = useState(state.mobile);
  const [type, setType] = useState(state.type);
  const [file, setFile] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const confirmResult = await Swal.fire({
      title: "Are you sure you want to update?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Update it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        setLoading2(true);
        if (file) {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");

          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dpgelkpd4/image/upload",
            data
          );

          const { url } = uploadRes.data;

          const response = await axios.put(`users/${state._id}`, {
            ...state, // Pass the entire state object to be updated
            name,
            country,
            isAdmin,
            type,
            mobile,
            img: url,
          });
          const data2 = response.data;
          // Update the state with the new details
          setName(data2.name);
          setCountry(data2.country);
          setisAdmin(data2.isAdmin);
          setMobile(data2.mobile);
          Swal.fire("Profile updated successfully!", "", "success");
          setLoading2(false);
          navigate("/users");
        } else {
          const response = await axios.put(`users/${state._id}`, {
            ...state, // Pass the entire state object to be updated
            name,
            country,
            type,
            isAdmin,
            mobile,
          });
          const data2 = response.data;
          // Update the state with the new details
          setName(data2.name);
          setCountry(data2.country);
          setisAdmin(data2.isAdmin);
          setMobile(data2.mobile);
          Swal.fire("Profile updated successfully!", "", "success");
          navigate("/users");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Something went wrong!", "error");
      }
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 md:px-24 p-4 sm:py-8">
        <div className="flex flex-col justify-center items-center md:m-20 m-5 py-10 gap-5 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="text-center mx-6 pt-3 pb-3">
            <h1 className="text-3xl font-bold text-blue-500">
              Update User Details
            </h1>
          </div>
          <div>
            <img
              className="w-52 h-52 rounded-full shadow-lg border-4 border-blue-500 object-cover"
              src={file ? URL.createObjectURL(file) : `${state.img}`}
              alt=""
            />
          </div>
          <div className="text-center mx-6 pt-3">
            <h1 className="text-lg">Available Points</h1>
            <h3 className="text-blue-500 font-bold">1500</h3>
          </div>
          <div className="text-center pb-10">
            <h1 className="text-lg">Account Status</h1>
            <h3 className="text-blue-500 font-bold">Blue</h3>
          </div>
          {loading2 && <Spinner />}
        </div>
        <div className="grid rounded-lg px-8 items-center bg-white p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="md:pt-4">
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Email:</span>
                <input
                  type="text"
                  value={state.email}
                  disabled
                  className="px-2 py-2 w-full placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Created at:</span>
                <input
                  type="text"
                  value={createdatnew}
                  disabled
                  className="px-2 py-2 w-full placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Updated at:</span>
                <input
                  type="text"
                  value={updatedatnew}
                  disabled
                  className="px-2 py-2 w-full placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Name:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="px-2 py-2 w-full placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Country:</span>
                <input
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="px-2 py-2 w-full placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Mobile:</span>
                <input
                  type="text"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  className="px-2 py-2 w-full rounded-lg placeholder-slate-300 text-slate-600 relative bg-white text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Is Admin:</span>
                <div className="relative">
                  <select
                    id="isActive"
                    value={isAdmin}
                    onChange={(e) => setisAdmin(e.target.value)}
                    className="w-96 px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring appearance-none"
                  >
                    <option value="false" className="text-gray-900">
                      False
                    </option>
                    <option value="true" className="text-gray-900">
                      True
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.354 7.354a2 2 0 00-2.828 0L10 8.172 7.475 5.646a2 2 0 10-2.828 2.828l3.182 3.182a2 2 0 002.828 0l3.182-3.182a2 2 0 000-2.828z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div>
              <label className="flex flex-col items-start">
                <span className="pb-1 font-bold">Type:</span>
                <div className="relative">
                  <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-96 px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring appearance-none"
                  >
                    <option value="traveler" className="text-gray-900">
                      Traveler
                    </option>
                    <option value="hotelOwner" className="text-gray-900">
                      Hotel Owner
                    </option>
                    <option value="vehicleOwner" className="text-gray-900">
                      Vehicle Owner
                    </option>
                    <option value="restaurantOwner" className="text-gray-900">
                      Restaurant Owner
                    </option>
                    <option value="tourGuide" className="text-gray-900">
                      Tour Guide
                    </option>
                    <option value="eventOrganizer" className="text-gray-900">
                      Event Organizer
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.354 7.354a2 2 0 00-2.828 0L10 8.172 7.475 5.646a2 2 0 10-2.828 2.828l3.182 3.182a2 2 0 002.828 0l3.182-3.182a2 2 0 000-2.828z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="file" className="flex items-center mb-5 mt-2">
                <span className="pr-3">
                  Click here to add a profile picture:
                </span>
                <DriveFolderUploadOutlinedIcon />
              </label>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>

            <div>
              <button
                className="bg-blue-500 w-full p-3 rounded-xl text-white font-bold mb-5"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateuserA;
