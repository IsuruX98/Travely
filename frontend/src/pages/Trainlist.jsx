import React from "react";
import Datatable from "../components/datatable/Datatable";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Trainlist = ({ columns }) => {
  return (
    <>
      <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-7 pb-2 justify-between md:items-center ">
        <div className="text-3xl font-bold">Train Managment</div>
        <div className="grid md:grid-cols-2 gap-1">
          <Link to="/admintrain/add" className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3">
            Add Train
          </Link>
          <Link to ="/adminTrain/reviewPanel" className="bg-gray-800 hover:bg-gray-600 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3">
            Train Reservations
          </Link>
        </div>
      </div>

      <div>
        <Datatable columns={columns} />
      </div>
    </>
  );
};

export default Trainlist;
