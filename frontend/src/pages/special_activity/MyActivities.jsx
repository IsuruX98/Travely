import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";

const MyActivities = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "font-bold text-gray-800 ml-4 ",
      cellClassName: "text-gray-700 ml-4",
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      headerClassName: "font-bold text-gray-800",
      cellClassName: "text-gray-700",
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
      headerClassName: "font-bold text-gray-800",
      cellClassName: "text-gray-700",
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      headerClassName: "font-bold text-gray-800",
      cellClassName: "text-gray-700",
    },
    {
      field: "location",
      headerName: "Location",
      width: 200,
      headerClassName: "font-bold text-gray-800",
      cellClassName: "text-gray-700",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      headerClassName: "font-bold text-gray-800",
      cellClassName: "text-gray-700",
      renderCell: (params) => (
        <div>
          <Link
            to={`/add-new-activity/${params.id}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
            state={{ activity: params.row }}
          >
            Edit
          </Link>
          <button
            onClick={() => {
              handleDelete(params.id);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const rows = activities.map((activity) => ({
    id: activity._id,

    ...activity,
  }));

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("activities/myActivities");
      if (response.data.success) {
        setActivities(response.data.activities);
        console.log(response.data.activities);
      } else {
        console.log("Failed to fetch activities");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchActivities();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`/activities/${id}`);
      await fetchActivities();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const tableRows = [];

    activities.forEach((activity) => {
      tableRows.push([activity.name, activity.description, activity.location]);
    });

    // Add the logo to the top of the PDF
    doc.setFontSize(24);
    doc.setTextColor("#41A4FF");
    doc.text("Travely", 10, 20);

    // Add the table to the PDF
    doc.autoTable({
      startY: 30,
      head: [["Name", "Description", "Location"]],
      body: tableRows,
    });

    doc.save("activities.pdf");
  };

  return (
    <>
      <div>
        <div className="bg-[#DEEFFF] flex items-center justify-between w-full flex-col lg:flex-row">
          <div className="p-8 pt-5 md:p-24 md:pt-5 lg:p-5">
            <h1 className="text-3xl md:text-3xl    text-[#272727]">
              <span class="text-[#41A4FF]"> Add more activities..</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        className="mx-auto py-6 sm:px-6 lg:px-8 p-10  mt-20"
        style={{ marginBottom: "20rem", width: "1400px" }}
      >
        <div className="flex items-center justify-between mb-4">
          <p
            className="block text-blue-500 font-bold mb-6"
            style={{ fontSize: "28px" }}
          >
            My Activities..
          </p>
          <div>
            {" "}
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold mt-4 py-1 px-2 rounded mr-4"
              onClick={handleDownload}
            >
              Download Full report of Activities
            </button>
            <button
              onClick={() => {
                navigate("/add-new-activity");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold mt-4 py-1 px-2 rounded"
            >
              Add New Activity
            </button>
          </div>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default MyActivities;
