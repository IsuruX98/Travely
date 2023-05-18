import React from "react";
import Datatable from "../components/datatable/Datatable";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Tourreservations = ({ columns }) => {
  return (
    <>
      <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-7 pb-2 justify-between md:items-center ">
        <div className="text-3xl font-bold">Tour Package Reservations</div>
      </div>

      <div>
        <Datatable columns={columns} />
      </div>
    </>
  );
};

export default Tourreservations;
