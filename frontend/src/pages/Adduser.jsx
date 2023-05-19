import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/spinner/LoadingSpinner";

const Adduser = () => {
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [type, setType] = useState("traveler");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Do you want to signup this account?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    });

    if (password !== password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match!",
      });
      return;
    }
    if (email === "" || password === "" || name === "" || mobile === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing required fields!",
      });
      return;
    }
    if (!email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a valid email address",
      });
      return;
    }
    if (mobile.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter a valid mobile number",
      });
      return;
    }
    if (password.length <= 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long",
      });
      return;
    }

    if (result.isConfirmed) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");

      try {
        setLoading2(true);
        if (file) {
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dpgelkpd4/image/upload",
            data
          );

          const { url } = uploadRes.data;

          const response = await axios.post("auth/register", {
            name,
            email,
            mobile,
            country,
            type,
            isAdmin,
            password,
            img: url,
          });
          setLoading2(false);
          Swal.fire("Done! Account registered!", "", "success");
          navigate("/users");
        } else {
          const response = await axios.post("auth/register", {
            name,
            email,
            mobile,
            country,
            type,
            isAdmin,
            password,
          });
          Swal.fire("Done! Account registered!", "", "success");
          navigate("/users");
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      }
    } else if (result.isDenied) {
      Swal.fire("Details are not saved", "", "error");
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 md:px-24 p-4 sm:py-8">
        <div className="flex flex-col justify-center items-center md:py-36 py-10 gap-5 rounded-lg md:m-20 m-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div className="text-center mx-6 pt-3 pb-3">
            <h1 className="text-4xl font-bold text-blue-500">Add User</h1>
          </div>
          <div>
            <img
              className="w-44 h-44 rounded-full shadow-lg border-4 border-blue-500 object-cover"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="text-center mx-6 pt-3">
            <h1 className="text-xl font-semibold">Available Points</h1>
            <h3 className="text-blue-500">1500</h3>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold">Account Status</h1>
            <h3 className="text-blue-500">Blue</h3>
          </div>
        </div>
        <div className="grid rounded-lg items-center bg-white p-6">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full md:mt-6 px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              id="isActive"
              value={isAdmin}
              onChange={(e) => setIsAdmin(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="traveler">Traveler</option>
              <option value="hotelOwner">Hotel Owner</option>
              <option value="vehicleOwner">Vehicle Owner</option>
              <option value="resturentOwner">Restaurant Owner</option>
              <option value="tourGuide">Tour Guide</option>
              <option value="eventOrganizer">Event Organizer</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 rounded-lg placeholder-gray-400 text-gray-600 bg-white border border-gray-300 outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-center">
              <label htmlFor="file" className="cursor-pointer">
                Click here to add a profile picture
                <DriveFolderUploadOutlinedIcon />
              </label>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
            {loading2 && <Spinner />}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold mb-9"
              type="submit"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adduser;
