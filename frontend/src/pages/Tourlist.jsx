import React from "react";
import Datatable from "../components/datatable/Datatable";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Tourlist = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data } = useFetch(`${path}`);

  function generatePDF(tickets) {
    const doc = new jspdf();
    const tableColumn = [
      "No",
      "Name Of Package",
      "Tour Category",
      "Duration",
      "Price",
      "Maximum Group Count",
      "Added By",
    ];
    const tableRows = [];

    tickets
      .slice(0)
      .reverse()
      .map((tour, index) => {
        const ticketData = [
          index + 1,
          tour.name,
          tour.category,
          tour.duration,
          tour.price,
          tour.groupCount,
          tour.currentUser,

          moment(tour.createdAt).format("MM/DD/YYYY h:mm A"), // format createdAt using moment
          moment(tour.updatedAt).format("MM/DD/YYYY h:mm A"), // format updatedAt using moment
        ];
        tableRows.push(ticketData);
      });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.text("Traverly", 14, 15).setFontSize(16); // add heading
    doc.text("Tour Details Report", 14, 23).setFontSize(10);
    doc.text(`Report Generated Date: ${dateStr}`, 14, 30).setFontSize(10);
    doc
      .text("Traverly.co,Whihara mavatha,Kaduwela,Sri lanka", 14, 37)
      .setFontSize(10);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 42,
    });

    doc.save(`Tour-Details-Report_${dateStr}.pdf`);
  }

  return (
    <>
      <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-7 pb-2 justify-between md:items-center ">
        <div className="text-3xl font-bold">Tour Package Managment</div>
        <div className="grid md:grid-cols-2 gap-1">
          <Link
            to={"/addtour"}
            className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            Add Tour Package
          </Link>
          <Link
            to="/tourreservation/all"
            className="bg-gray-800 hover:bg-gray-600 text-center text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            View Reservations
          </Link>
        </div>
        <button
          onClick={() => {
            generatePDF(data);
          }}
          className="bg-gray-800 text-center hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
        >
          Generate report
        </button>
      </div>

      <div>
        <Datatable columns={columns} />
      </div>
    </>
  );
};

export default Tourlist;
