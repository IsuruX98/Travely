import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AddHotel = () => {
  const navigate = useNavigate();
  const [hotelName, setHotelName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [hotelType, setHotelType] = React.useState("");
  const [city, setCity] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [distance, setDistance] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [noOfRoomTypes, setNoOfRoomTypes] = React.useState("");
  const [price, setprice] = React.useState("");
  const [raiting, setRaiting] = React.useState(""); //must be added later
  const [hotelImg, setHotelImg] = React.useState("");

  const [hotelImgs, setHotelImgs] = useState([]);
  const [certificates, setCertificates] = React.useState([]);

  
  
  console.log(hotelImgs);

  
  function sendData(e) {
    e.preventDefault();

    if (isNaN(zip)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter valid zip code",
      });
      return;
    }
     if (isNaN(distance)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter distance in Km",
        });
         return;
    }
    if (contactNumber.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter valid mobile number",
      });
      return;
    }

    const formData = new FormData();

    formData.append("name", hotelName);
    formData.append("title", title);
    formData.append("type", hotelType);
    formData.append("city", city);
    formData.append("province", province);
    formData.append("zip", zip);
    formData.append("address", address);
    formData.append("distance", distance);
    formData.append("contactName", contactName);
    formData.append("contactNo", contactNumber);
    formData.append("numberOfRoomTypes", noOfRoomTypes);
    formData.append("HotelImg", hotelImg);

    for (let i = 0; i < hotelImgs.length; i++) {
      formData.append("HotelImgs", hotelImgs[i]);
      console.log(i);
    }
    for (let i = 0; i < certificates.length; i++) {
      formData.append("certificates", certificates[i]);
      console.log(i);
    }

    formData.append("description", description);
    formData.append("cheapestPrice", price);

    axios
      .post("/hotels", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Hotel added Successfully',
          showConfirmButton: false,
          timer: 2000,
          
        }) 
        navigate("/hotels");
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
    <div className="flex justify-center">
      <form
        class="w-full max-w-lg"
        onSubmit={sendData}
        encType="multipart/form-data"
      >
        <h1 className="text-2xl font-bold mb-8 mt-8">
          List Your <span class="text-[#41A4FF]">Hotel</span> and{" "}
          <span class="text-[#41A4FF]">Join</span> with us
        </h1>
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Hotel name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="hotelName"
              type="text"
              placeholder="Enter your Hotel name"
              required
              onChange={(e) => setHotelName(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 ">
          <div class="w-full  px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Title
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="hotelName"
              type="text"
              placeholder="Enter title for your Hotel"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3  md:mb-0">
            <label
              for="HotelType"
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Select your Hotel Type
            </label>
            <select
              id="hotelType"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => setHotelType(e.target.value)}
            >
              <option>--Add hotel type</option>
              <option>Hotel</option>
              <option>Apartment</option>
              <option>Resort</option>
              <option>Villa</option>
              <option>Cabin</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value.toLowerCase())}
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Province
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="province"
                onChange={(e) => setProvince(e.target.value)}
              >
                <option>SOUTHERN PROVINCE</option>
                <option>WESTERN PROVINCE</option>
                <option>CENTRAL PROVINCE</option>
                <option>SABARAGAMUWA PROVINCE</option>
                <option>EASTERN PROVINCE</option>
                <option>UVA PROVINCE</option>
                <option>NORTH WESTERN PROVINCE</option>
                <option>NORTH CENTRAL PROVINCE</option>
                <option>NORTHERN PROVINCE</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="zip"
              type="text"
              placeholder="90210"
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Distance from main city
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="distance"
              type="text"
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Contact Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="contactName"
              type="text"
              onChange={(e) => setContactName(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Contact Number
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="contactNumber"
              type="tel"
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              NUmber of room types
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="noOfRoomTypes"
              type="number"
              onChange={(e) => setNoOfRoomTypes(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Description
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="desc"
              type="String"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              cheapest price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="price"
              type="Number"
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Rating
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rating"
              type="Number"
              onChange={(e) => setRaiting(e.target.value)}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Upload main hotel image
            </label>
            <input
              type="file"
              name="mainImage"
              id="mainImg"
              class=" bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              onChange={(e) => setHotelImg(e.target.files[0])}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Upload hotel images (upload 5 iamges)
            </label>
            <input
              type="file"
              name="mainImage"
              id="mainImg"
              class=" bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              multiple
              required
              onChange={(e) => {
                const files = e.target.files;
                const images = [];
                for (let i = 0; i < files.length; i++) {
                  images.push(files[i]);
                }
                setHotelImgs(images);
              }}
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Provide buissness registration certificate and Hotel license
            </label>
            <input
              type="file"
              name="Certificate"
              id="Certificate"
              class=" bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              multiple
              required
              onChange={(e) => {
                const cfiles = e.target.files;
                const cimages = [];
                for (let i = 0; i < cfiles.length; i++) {
                  cimages.push(cfiles[i]);
                }
                setCertificates(cimages);
              }}
            />
          </div>
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8">
          SUBMIT
        </button>
        <input class="bg-[#787878] hover:bg-[#474747] text-white font-bold py-2 px-4 rounded-full ml-5
        " type="reset" value="Reset" />
      </form>
    </div>
  );
};

export default AddHotel;
