import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

const PendingActivities = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "font-extrabold text-black-900 ml-4 text-xl",
      cellClassName: "text-gray-700 ml-4",
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      headerClassName: "font-extrabold text-black-900 ml-4 text-lg",
      cellClassName: "text-gray-700",
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      headerClassName: "font-extrabold text-black-900 ml-4 text-lg",
      cellClassName: "text-gray-700",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerClassName: "font-extrabold text-black-900 ml-4 text-lg",
      cellClassName: "text-gray-700",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      headerClassName: "font-extrabold text-black-900 ml-4 text-lg",
      cellClassName: "text-gray-700",
      renderCell: (params) => (
        <div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-3"
            onClick={() => handleAccept(params.id)}
          >
            Accept
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDecline(params.id)}
          >
            Decline
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchActivities();
  }, []);
  const rows = activities.map((activity) => ({
    id: activity._id,

    ...activity,
  }));

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("activities/pending");
      if (response.data.success) {
        setActivities(response.data.activities);
      } else {
        console.log("Failed to fetch activities");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const handleAccept = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`activities/approve/${id}`);
      fetchActivities();
      console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleDecline = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`activities/decline/${id}`);
      fetchActivities();
      console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  return (
    <>
      <div
        className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8  mt-20"
        style={{ marginBottom: "20rem" }}
      >
        <div className="flex items-center justify-between mb-4">
          <p
            className="block text-blue-500 font-bold mb-6"
            style={{ fontSize: "28px" }}
          >
            All Activities
          </p>
        </div>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            loading={isLoading}
            loadingOverlay={
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default PendingActivities;
