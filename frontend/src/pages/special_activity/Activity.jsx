import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Activity = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  useEffect(() => {
    const getActivity = async () => {
      try {
        const response = await axios.get(`/activities/${id}`);
        console.log(response.data);
        setActivity(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getActivity();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const activityEndTime = activity.timeRange.endTime;
    const activityStartTime = activity.timeRange.startTime;
    const selectedStartTime = startTime;

    if (!(activityStartTime <= startTime <= activityEndTime)) {
      if (!(activityStartTime <= startTime)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Start time must be after Activity's start time",
        });
        return;
      }

      if (!(startTime <= activityEndTime)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Start time must be before Activity's end time",
        });
        return;
      }
    }
    if (endTime <= selectedStartTime) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "End time must be after start time",
      });
      return;
    }
    if (activityEndTime <= endTime) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Selected end time must be before the Acitivity's End Time",
      });
      return;
    }

    try {
      console.log(id);
      const response = await axios.post(`/reservations/create`, {
        activity_id: id,
        startDate,
        startTime,
        endDate,
        endTime,
      });
      console.log(response.data);
      navigate("/my-reservations");
    } catch (error) {
      console.log(error);
      alert("Failed to make reservation");
    }
  };

  return (
    <>
      <div>
        <div className="bg-[#DEEFFF] flex items-center justify-between w-full flex-col lg:flex-row">
          <div className="p-8 pt-5 md:p-24 md:pt-5 lg:p-5">
            <h1 className="text-3xl md:text-3xl  font-bold uppercase  text-[#272727]">
              Find the
              <span class="text-[#41A4FF]"> Special Activity</span> for your
              next stay today!
            </h1>
          </div>
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto mt-20 "
        style={{ marginBottom: "20rem" }}
      >
        <div className="flex flex-wrap justify-between ">
          {activity && (
            <div class="w-full md:w-2/3 p-4 bg-white rounded-lg shadow-lg border-2 border-gray-300">
              <h2 class="text-2xl gap-2 font-bold mb-2 text-blue-600">
                {activity.name}
              </h2>
              <div class="flex items-center align-center ">
                <p class="text-lg font-semibold mb-2 mr-2">Location: </p>
                <p class="text-gray-700">{activity.location}</p>
              </div>
              <div class="flex gap-2 items-center align-center ">
                <p class="text-lg font-semibold mb-2">Date: </p>
                <span class="text-gray-700">
                  {new Date(activity.dateRange.startDate).toLocaleDateString()}{" "}
                  - {new Date(activity.dateRange.endDate).toLocaleDateString()}
                </span>
              </div>

              <div class="flex gap-2 items-center align-center ">
                <p class="text-lg font-semibold mb-2">Time: </p>
                <span class="text-gray-700">
                  {activity.timeRange.startTime} - {activity.timeRange.endTime}
                </span>
              </div>

              <div class="flex gap-2 items-center align-center ">
                <p class="text-lg font-semibold mb-2">Type:</p>
                <span class="text-gray-700">{activity.type}</span>
              </div>

              <div class="border-t-2 border-gray-300 pt-4">
                <p class="text-lg font-semibold mb-2">Description:</p>
                <p class="text-gray-700">{activity.description}</p>
              </div>
              <img
                src={activity.image}
                alt={activity.name}
                class="mt-4 rounded-lg"
              />
            </div>
          )}

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold mb-2">Reserve</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startDate"
                  type="date"
                  required
                  value={startDate}
                  min={activity?.dateRange.startDate.slice(0, 10)}
                  max={activity?.dateRange.endDate.slice(0, 10)}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="endDate"
                >
                  End Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endDate"
                  type="date"
                  required
                  value={endDate}
                  min={
                    startDate
                      ? startDate
                      : activity?.dateRange.startDate.slice(0, 10)
                  }
                  max={activity?.dateRange.endDate.slice(0, 10)}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="startTime"
                >
                  Start Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startTime"
                  type="time"
                  required
                  value={startTime}
                  min={activity?.timeRange?.startTime || "00:00"}
                  max={activity?.timeRange?.endTime || "23:59"}
                  onChange={(e) => {
                    setStartTime(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="endTime"
                >
                  End Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="endTime"
                  type="time"
                  required
                  value={endTime}
                  min={startTime || activity?.timeRange?.startTime || "00:00"}
                  max={activity?.timeRange?.endTime || "23:59"}
                  onChange={(event) => {
                    const selectedEndTime = event.target.value;
                    setEndTime(selectedEndTime);
                  }}
                />
              </div>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
