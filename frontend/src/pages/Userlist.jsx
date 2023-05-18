import Datatable from "../components/datatable/Datatable";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import jspdf from "jspdf";
import "jspdf-autotable";
import moment from "moment";

const Userlist = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data } = useFetch(`${path}`);

  function generatePDF(tickets) {
    const doc = new jspdf();
    const tableColumn = [
      "No",
      "Name",
      "Email",
      "Mobile",
      "Country",
      "Type",
      "Created at",
      "Updated at",
    ];
    const tableRows = [];

    tickets
      .slice(0)
      .reverse()
      .map((ticket, index) => {
        const ticketData = [
          index + 1,
          ticket.name,
          ticket.email,
          ticket.mobile,
          ticket.country,
          ticket.type,
          moment(ticket.createdAt).format("MM/DD/YYYY h:mm A"), // format createdAt using moment
          moment(ticket.updatedAt).format("MM/DD/YYYY h:mm A"), // format updatedAt using moment
        ];
        tableRows.push(ticketData);
      });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];

    doc.setFontSize(20).setTextColor(65, 164, 255); // set font size and blue color
    doc.setFont("helvetica", "bold");
    doc.text("Traverly", 14, 15); // add heading
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10).setTextColor(0, 0, 0); // reset font size and color
    doc.text("User Details Report", 14, 23);
    doc.text(`Report Generated Date: ${dateStr}`, 14, 30);
    doc
      .text("Traverly.co,Whihara mavatha,Kaduwela,Sri lanka", 14, 37)
      .setFontSize(10);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 7 },
      startY: 45,
      headerStyles: { fillColor: [31, 41, 55] },
    });

    doc.save(`User-Details-Report_${dateStr}.pdf`);
  }

  return (
    <>
      <div className="flex flex-row col-span-2 lg:px-32 px-8 pt-8 justify-between md:items-center ">
        <div className="text-3xl font-bold">User Managment</div>
        <div className="grid md:grid-cols-2 gap-1">
          <Link
            to="/adduser"
            className="bg-blue-500 flex justify-center items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            Add User
          </Link>
          <button
            onClick={() => {
              generatePDF(data);
            }}
            className="bg-gray-800 text-center hover:bg-gray-600 text-white font-bold py-2 px-4 rounded cursor-pointer lg:mt-0 mt-3"
          >
            Generate report
          </button>
        </div>
      </div>

      <div>
        <Datatable columns={columns} />
      </div>
    </>
  );
};

export default Userlist;
