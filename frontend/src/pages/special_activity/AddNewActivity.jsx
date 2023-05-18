import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileBase from "react-file-base64";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import axios from 'axios';

const ActivityForm = () => {
  const navigate = useNavigate();
  const locationRoute = useLocation();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [activityType, setActivityType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const activity = locationRoute.state?.activity;
    console.log(activity);
    if (activity) {
      setIsEditing(true);
      setName(activity.name);
      setLocation(activity.location);
      setStartDate(new Date(activity.dateRange.startDate));
      setEndDate(new Date(activity.dateRange.endDate));

      setStartTime(activity.timeRange.startTime);
      setEndTime(activity.timeRange.endTime);
      setActivityType(activity.type);
      setDescription(activity.description);
      setImage(activity.image);
    }
  }, [locationRoute.state]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  function handleEndTimeChange(event) {
    const selectedEndTime = event.target.value;
    const selectedStartTime = startTime;

    // Convert the selected times to Date objects
    const endDate = new Date(`2000-01-01T${selectedEndTime}`);
    const startDate = new Date(`2000-01-01T${selectedStartTime}`);

    // Check if the end time is before the start time
    if (endDate <= startDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "End time must be after start time",
      });
      return;
    }

    // Update the state with the selected end time
    setEndTime(selectedEndTime);
  }

  const handleActivityTypeChange = (e) => {
    setActivityType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (isEditing) {
        await axios.post("/activities", {
          id: locationRoute.state.activity._id,
          name: name,
          location: location,
          dateRange: {
            startDate: startDate,
            endDate: endDate,
          },
          timeRange: {
            startTime: startTime,
            endTime: endTime,
          },
          type: activityType, // Replace with a valid ActivityType _id
          description: description,
          image: image,
        });
      } else {
        await axios.post("/activities", {
          name: name,
          location: location,
          dateRange: {
            startDate: startDate,
            endDate: endDate,
          },
          timeRange: {
            startTime: startTime,
            endTime: endTime,
          },
          type: activityType, // Replace with a valid ActivityType _id
          description: description,
          image: image,
        });
      }
      setIsLoading(false);

      navigate("/my-activities");
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className="max-w-3xl mx-auto mt-20"
        style={{ marginBottom: "20rem" }}
      >
        <p
          className="block text-blue-500 font-bold mb-6"
          style={{ fontSize: "28px" }}
        >
          Create a new Special Activity!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Activity name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Malabe"
              value={location}
              onChange={handleLocationChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date-range"
            >
              Date Range
            </label>
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => handleStartDateChange(date)}
              value={startDate}
              selectsStart
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              required
            />
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              selected={endDate}
              startDate={startDate}
              endDate={endDate}
              value={endDate}
              onChange={(date) => handleEndDateChange(date)}
              selectsEnd
              dateFormat="yyyy-MM-dd"
              minDate={startDate ? new Date(startDate) : new Date()}
              maxDate={
                new Date(new Date().setFullYear(new Date().getFullYear() + 1))
              }
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time-range"
            >
              Time Range
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="start-time"
              type="time"
              placeholder="Start Time"
              value={startTime}
              onChange={handleStartTimeChange}
              required
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              id="end-time"
              type="time"
              placeholder="End Time"
              value={endTime}
              onChange={handleEndTimeChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="activity-type"
            >
              Activity Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="activity-type"
              value={activityType}
              onChange={handleActivityTypeChange}
              required
            >
              <option value="">Select Activity Type</option>
              <option value="INDOOR">Indoor</option>{" "}
              {/* Replace with valid options */}
              <option value="OUTDOOR">Outdoor</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-auto"
              id="description"
              rows="20"
              placeholder="Activity description"
              value={description}
              onChange={handleDescriptionChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <FileBase
              type="file"
              value={image}
              multiple={false}
              onDone={({ base64 }) => setImage(base64)}
              required
            />

            {image && (
              <img
                src={image}
                alt="Preview"
                style={{
                  maxWidth: "500",
                  maxHeight: "400px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            )}
          </div>
          {isLoading ? (
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"
                ></path>
              </svg>
              Creating Activity...
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-20 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Activity
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default ActivityForm;
