import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


export const UpdateHotel= () => {

    const navigate = useNavigate();
const location=useLocation();
    const id= location.pathname.split("/")[3];
    
    const {data, loading,error }=useFetch(`/hotels/find/${id}`)

  const [name, setHotelName] = React.useState(data.name);
  const [title, setTitle] = React.useState(data.title);
  const [type, setHotelType] = React.useState(data.type);
  const [city, setCity] = React.useState(data.city);
  const [province, setProvince] = React.useState(data.province);
  const [zip, setZip] = React.useState(data.zip);
  const [address, setAddress] = React.useState(data.address);
  const [distance, setDistance] = React.useState(data.distance);
  const [description, setDescription] = React.useState(data.description);
  const [contactName, setContactName] = React.useState(data.contactName);
  const [contactNo, setContactNumber] = React.useState(data.contactNumber);
 // const [noOfRoomTypes, setNoOfRoomTypes] = React.useState("");
  const [cheapestPrice, setprice] = React.useState(data.cheapestPrice);

  

  

  

  function sendData(e) {
    e.preventDefault();

    

    const updateHotel = {
        name,
        title,
        type,
        city,
        province,
        zip,
        address,
        distance,
        description,
        contactName,
        contactNo,
        cheapestPrice
      };

    axios
      .put(`/hotels/${id}`,updateHotel) 
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Hotel updated Successfully',
          showConfirmButton: false,
          timer: 2000
        }) 
        navigate(`/hotels`)

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
        <h1 className="text-2xl font-bold mb-8 mt-8">Update <span class='text-[#41A4FF]'>Hotel</span> and <span class='text-[#41A4FF]'>Join</span> with us</h1>
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
              defaultValue={data.name}
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
              defaultValue={data.title}
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
              defaultValue={data.type}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) =>setHotelType(e.target.value)}
            >
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
              defaultValue={data.city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
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
                defaultValue={data.province}
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
              defaultValue={data.zip}
              type="text"
              
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
              defaultValue={data.address}
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
              defaultValue={data.distance}
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
              defaultValue={data.contactName}
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
              defaultValue={data.contactNo}
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
              Description
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="desc"
              defaultValue={data.description}
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
              defaultValue={data.cheapestPrice}
              type="Number"
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
        </div>

        {/* <div class="flex flex-wrap -mx-3 mb-6">
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
        </div> */}

    
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-8">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateHotel;