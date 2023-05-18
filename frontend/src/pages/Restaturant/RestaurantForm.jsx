import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RestaurantForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [staffAmount, setStaffAmount] = useState("");
  const [qualification, setQualification] = useState("");
  const [capacity, setCapacity] = useState("");
  const [regNo, setRegNo] = useState("");
  const [city, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [priceRange, setPrice] = useState("");
  const [uploadResimage, setImage] = useState("");
  const [uploadRegimage, setImg] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleStaffAmountChange = (e) => {
    setStaffAmount(e.target.value);
  };

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleRegNoChange = (e) => {
    setRegNo(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/restaurant", {
        name: name,
        type: type, // Replace with a valid ActivityType _id
        staffAmount: staffAmount,
        qualification: qualification,
        capacity: capacity,
        regNo: regNo,
        city: city,
        Address: address,
        contactNo: contactNo,
        priceRange: priceRange,
        uploadResimage: uploadResimage,
        uploadRegimage: uploadRegimage,
      });

      navigate("/restaurant");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-20">
        <p
          className="block text-blue-500 font-bold mb-6"
          style={{ fontSize: "28px" }}
        >
          Add Restaurant!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Restaurant Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Restaurant name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="type"
            >
              Restaurant Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              value={type}
              onChange={handleTypeChange}
              required
            >
              <option value="type">Restaurant Type</option>
              {""}
              <option value="korean">Korean</option>
              {""}
              <option value="chinese">Chinese</option>
              {""}
              <option value="thai">Thai</option>
              {""}
              <option value="indian">Indian</option>
              {""}
              <option value="srilankan">Sri Lankan</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="staff-amount"
            >
              Staff Amount
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="staffAmount"
              value={staffAmount}
              onChange={handleStaffAmountChange}
              required
            >
              <option value="staffAmount">Staff Amount</option>
              {""}
              <option value="4-7">4-7</option>
              {""}
              <option value="7-10">7-10</option>
              {""}
              <option value="10-15">10-15</option>
              {""}
              <option value="15-30">15-30</option>
              {""}
              <option value="30-50">30-50</option>
              {""}
              <option value="50-70">50-70</option>
              {""}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="qualifications"
            >
              Culinary Qualification of Chief Cheaf
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="qualification"
              value={qualification}
              onChange={handleQualificationChange}
              required
            >
              <option value="qualification">Qualifications</option>
              <option value="none">None</option>
              {""}
              <option value="diploma">Diploma in Culinary Arts</option>
              {""}
              <option value="bsc">Bsc in Culinary Arts</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="restaurant-capacity"
            >
              Restaurant Capacity
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="capacity"
              value={capacity}
              onChange={handleCapacityChange}
              required
            >
              <option value="restaurantCapacity">Restaurant Capacity</option>
              {""}
              <option value="20-30">20-30</option>
              {""}
              <option value="30-50">30-50</option>
              {""}
              <option value="50-70">50-70</option>
              {""}
              <option value="70-100">70-100</option>
              {""}
              <option value="100-150">100-150</option>
              {""}
              <option value="150-200">150-200</option>
              {""}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="uploadResimage"
            >
              Upload Restaurant Images
            </label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Restaurant Registration Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-auto"
              id="regNo"
              placeholder="RegNo"
              value={regNo}
              onChange={handleRegNoChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="district"
            >
              District
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              value={city}
              onChange={handleDistrictChange}
              required
            >
              <option value="city">District</option>
              {""}
              <option value="ampara">Ampara</option>
              {""}
              <option value="anuradhapura">Anuradhapura</option>
              {""}
              <option value="badulla">Badulla</option>
              {""}
              <option value="batticaloa">Batticaloa</option>
              {""}
              <option value="colombo">Colombo</option>
              {""}
              <option value="galle">Galle</option>
              {""}
              <option value="gampaha">Gampaha</option>
              {""}
              <option value="hambantota">Hambantota</option>
              {""}
              <option value="jaffna">Jaffna</option>
              {""}
              <option value="kalutara">Kalutara</option>
              {""}
              <option value="kandy">Kandy</option>
              {""}
              <option value="kegalle">Kegalle</option>
              {""}
              <option value="kilinochchi">Kilinochchi</option>
              {""}
              <option value="kurunegala">Kurunegala</option>
              {""}
              <option value="mannar">Mannar</option>
              {""}
              <option value="matale">Matale</option>
              {""}
              <option value="matara">Matara</option>
              {""}
              <option value="monaragala">Monaragala</option>
              {""}
              <option value="mulativu">Mullaitivu</option>
              {""}
              <option value="nuwara-eliya">Nuwara Eliya</option>
              {""}
              <option value="polonnaruwa">Polonnaruwa</option>
              {""}
              <option value="puttalam">Puttalam</option>
              {""}
              <option value="ratnapura">Ratnapura</option>
              {""}
              <option value="trincomalee">Trincomalee</option>
              {""}
              <option value="vavuniya">Vavuniya</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="contactNo"
            >
              Contact Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactNo"
              type="text"
              placeholder="contactNo"
              value={contactNo}
              onChange={handleContactNoChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="priceRange"
            >
              Pricing Range for Cuisines
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="priceRange"
              value={priceRange}
              onChange={handlePriceChange}
              required
            >
              <option value="priceRange">Price Range</option>
              {""}
              <option value="200-3000">200-3000</option>
              {""}
              <option value="200-5000">200-5000</option>
              {""}
              <option value="200-6000">200-6000</option>
              {""}
              <option value="200-7000">200-7000</option>
              {""}
              <option value="200-8000">200-8000</option>
              {""}
              <option value="200-1000">200-10000</option>
              {""}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="uploadRegimage"
            >
              Upload Restaurant Registered Certificate
            </label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setImg(base64)}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-20 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Restaurant
          </button>
        </form>
      </div>
    </>
  );
};

export default RestaurantForm;
