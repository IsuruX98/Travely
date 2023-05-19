import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import moment from "moment";
import Swal from "sweetalert2";
import Spinner from "../components/spinner/LoadingSpinner";

const Profileupdate = () => {
  const { state } = useLocation();

  const [loading2, setLoading2] = useState(false);

  const createdat = state.createdAt;
  const updatedat = state.updatedAt;

  const createdatnew = moment(createdat).fromNow();
  const updatedatnew = moment(updatedat).fromNow();

  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to Delete?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });
    if (confirmResult.isConfirmed) {
      try {
        await axios.delete(`users/${state._id}`);
        alert("deleted successfully!");
        navigate("/register");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [name, setName] = useState(state.name);
  const [country, setCountry] = useState(state.country);
  const [mobile, setMobile] = useState(state.mobile);
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
            mobile,
            img: url,
          });
          const data2 = response.data;
          // Update the state with the new details
          setName(data2.name);
          setCountry(data2.country);
          setMobile(data2.mobile);
          setFile(""); // Clear the file state after successful update
          setLoading2(false);
          Swal.fire("Profile updated successfully!", "", "success");

          navigate("/login");
        } else {
          const response = await axios.put(`users/${state._id}`, {
            ...state, // Pass the entire state object to be updated
            name,
            country,
            mobile,
          });
          const data2 = response.data;
          // Update the state with the new details
          setName(data2.name);
          setCountry(data2.country);
          setMobile(data2.mobile);
          setFile(""); // Clear the file state after successful update
          Swal.fire("Profile updated successfully!", "", "success");

          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Something went wrong!", "", "error");
      }
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 md:px-24 p-4 sm:py-8 ">
        <div className="flex flex-col justify-center items-center md:py-28 py-10 gap-5 rounded-lg bg-white p-6 md:m-20 m-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="text-center mx-6 pb-4">
            <h1 className="text-3xl font-bold text-blue-500">Update Details</h1>
          </div>
          <div>
            <img
              className="w-48 h-48 rounded-full shadow-lg border-4 border-blue-500 object-cover"
              src={file ? URL.createObjectURL(file) : `${state.img}`}
              alt=""
            />
          </div>
          <div className="text-center mx-6 pt-3">
            <h1 className="text-lg">Available Points</h1>
            <h3 className="text-blue-500 font-bold">1500</h3>
          </div>
          <div className="text-center">
            <h1 className="text-lg">Account Status</h1>
            <h3 className="text-blue-500 font-bold">Blue</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 rounded-lg bg-white p-6 ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="mt-5">
              <label className="flex flex-col">
                <span className="pb-1 font-bold">Email:</span>
                <input
                  type="text"
                  value={state.email}
                  disabled
                  className="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <span className="pb-1 font-bold">Created at:</span>
                <input
                  type="text"
                  value={createdatnew}
                  disabled
                  className="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <span className="pb-1 font-bold">Updated at:</span>
                <input
                  type="text"
                  value={updatedatnew}
                  disabled
                  className="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-gray-100 rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col w-full">
                <span className="pb-1 font-bold">Name:</span>
                <input
                  type="text"
                  className="px-2 py-2 w-96 placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <span className="pb-1 font-bold">Country:</span>
                <input
                  type="text"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded-lg text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                <span className="pb-1 font-bold">Mobile:</span>
                <input
                  type="text"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  className="px-2 py-2 rounded-lg placeholder-slate-300 text-slate-600 relative bg-white text-sm border border-slate-300 outline-none focus:outline-none focus:ring"
                />
              </label>
            </div>
            <div>
              <label
                className="flex flex-col items-center mt-2 mb-2"
                htmlFor="file"
              >
                <span className="pr-3">
                  Click here to add a profile picture:
                </span>
                <DriveFolderUploadOutlinedIcon />

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
              </label>
            </div>
            {loading2 && <Spinner />}
            <div>
              <button
                className="bg-blue-500 p-3 w-96 rounded-xl text-white font-bold"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={handleDelete}
              className="bg-red-500 w-96 p-3 rounded-xl text-white font-bold mb-8"
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profileupdate;
