import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import "./datatable.scss";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [isLoading, setIsLoading] = useState(false);

  console.log(path);

  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useFetch(`${path}`);

  const navigate = useNavigate();

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        setIsLoading(true);
        await axios.delete(`${path}/${id}`);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }

      setList(list.filter((item) => item._id !== id));
    }
  };

  const handleview = async (id) => {
    try {
      if (path === "users") {
        const userdata = await axios.get(`${path}/${id}`);
        navigate("/userpage", { state: userdata.data });
      }
      if (path === "hotels") {
        const hoteldata = await axios.get(`${path}/find/${id}`);
        navigate("/hoteladmin", { state: hoteldata.data });
      }
      if (path === "vehicle") {
        const vehicledata = await axios.get(`${path}/${id}`);
        navigate("/vehicle/view/", { state: vehicledata.data });
      }
      //path tour
      if (path === "tours") {
        const tourData = await axios.get(`${path}/${id}`);
        navigate("/tour/view", { state: tourData.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded cursor-pointer"
              onClick={() => handleview(params.row._id)}
            >
              View
            </div>

            <div
              onClick={() => handleDelete(params.row._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded cursor-pointer"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  // Use useMemo to filter the list only when the search query changes
  const filteredList = useMemo(() => {
    if (!searchQuery) {
      return list;
    }

    const searchRegex = new RegExp(searchQuery.trim(), "i");
    return list.filter((item) => {
      // Combine all searchable fields into a single string to search in
      const searchableString = `${item.name}${item.type} ${item.email} ${item.mobile} ${item.country} ${item.ownerName} ${item.vehicleType}`;

      return searchRegex.test(searchableString);
    });
  }, [list, searchQuery]);

  return (
    <>
      <div className="flex flex-col col-span-2 lg:px-32 px-8 pt-3 pb-8 gap-5">
        <div className="flex md:justify-end">
          <input
            className="border-4 rounded py-2 px-4 lg:mt-0 mt-3 w-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="datatable">
          <DataGrid
            className="datagrid"
            rows={filteredList}
            columns={columns.concat(actionColumn)}
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
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      </div>
    </>
  );
};
export default Datatable;
