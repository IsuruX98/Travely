import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from 'jspdf'
import Swal from "sweetalert2";


const ReviewTickets = () => {

    const id = (useParams().id).toString();
    const [isApproved, setIsApproved] = useState(false);
    const [TO, setTO] = useState(localStorage.getItem('TO'))
    const [FROM, setFROM] = useState(localStorage.getItem('FROM'))
    const [ATIME, setATIME] = useState(localStorage.getItem('ATime'))
    const [DTIME, setDTIME] = useState(localStorage.getItem('DTime'))
    const [approved, setApproved] = useState(false);

    const [singlePassenger, setSinglePassenger] = useState({})

    useEffect(() => {

        axios.get(`/seatBookings/get/${id}`)
            .then((res) => {
                console.log(res.data)
                setSinglePassenger(res.data)
                console.log()
            }).catch((err) => {
                console.log(err.message)
            })




    }, [])

    const [isPaid, setIsPaid] = useState(singlePassenger.priceStatus);



    const generateReport = () => {
        const doc = new jsPDF();

        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor("#0074D9"); // Set text color to blue

        doc.setFontSize(12);
        doc.setTextColor(100);
        doc.setFont("helvetica", "normal");

        const tableX = 20;
        const tableY = 50;
        const tableRowHeight = 10;
        const tableColWidth = 60;
        const tableMargin = 5;

        const TrainName = singlePassenger.trainName;
        const prices = singlePassenger.price;
        const FRISTNAME = singlePassenger.firstName;
        const LASTNAME = singlePassenger.LastName;

        doc.setFontSize(20);
        doc.text(`TICKET for Passenger ${FRISTNAME} ${LASTNAME} :`, 20, 20);
        doc.setFontSize(10);
        doc.text(`Train Name : ${TrainName}`, 20, 30);

        const headers = ["From", "To", "Departure Time", "Arrival Time", "Price"];
        const data = [
            [FROM, TO, DTIME, ATIME, prices],
        ];

        let currentX = tableX;
        let currentY = tableY;
        headers.forEach((header) => {
            doc.setFillColor("#0074D9"); // Set fill color to blue
            doc.setTextColor("#FFFFFF"); // Set text color to white
            doc.rect(currentX, currentY - tableRowHeight, tableColWidth, tableRowHeight, "F"); // Draw filled rectangle
            doc.text(header, currentX + tableMargin, currentY - tableRowHeight / 2 + 3); // Draw header text
            currentX += tableColWidth + tableMargin;
        });

        currentY += tableRowHeight;
        currentX = tableX;
        data.forEach((row) => {
            row.forEach((cell) => {
                doc.setFillColor("#E5E5E5"); // Set fill color to light gray
                doc.setTextColor("#000000"); // Set text color to black
                doc.rect(currentX, currentY - tableRowHeight, tableColWidth, tableRowHeight, "F"); // Draw filled rectangle
                doc.text(cell, currentX + tableMargin, currentY - tableRowHeight / 2 + 3); // Draw cell text
                currentX += tableColWidth + tableMargin;
            });
        });

        doc.save("Ticket.pdf");
    };




    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium text-center mb-6">{singlePassenger.trainName}</h2>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">No. of Tickets:</p>
                    <p className="text-lg font-medium">{singlePassenger.noOfTickets}</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">Price:</p>
                    <p className="text-lg font-medium">{singlePassenger.price}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">First Name:</p>
                    <p className="text-lg font-medium">{singlePassenger.firstName}</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">Last Name:</p>
                    <p className="text-lg font-medium">{singlePassenger.LastName}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">Nationality:</p>
                    <p className="text-lg font-medium">{singlePassenger.nationality}</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-600 mb-2">ID Card Number:</p>
                    <p className="text-lg font-medium">{singlePassenger.IdCardNumber}</p>
                </div>
            </div>
            <div className="flex justify-end mb-6">
                {
                    !isPaid && (
                        <span className="inline-flex items-center px-2.5 py-0.5 mr-20 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            Paid
                        </span>
                    )
                }
                {
                    isPaid && (
                        <span className="inline-flex items-center px-2.5 py-0.5 mr-20 rounded-md text-sm font-medium bg-green-100 text-green-800">
                            Not Paid
                        </span>
                    )
                }

                {!isApproved && (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mr-4 shadow-md" onClick={
                        () => {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, approve it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    setApproved(true)
                                    Swal.fire(
                                        'Approved!',
                                        'The Ticket has been approved.',
                                        'success'
                                    )
                                }
                            })
                        }
                    }>
                        Approve
                    </button>
                )}
                {!isApproved && (
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md" onClick={
                        () => {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, Reject it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire(
                                        'Rejected!',
                                        'The Ticket has been Rejected.',
                                        'success'
                                    )
                                }
                            })
                        }
                    }>
                        Reject
                    </button>
                )}
                {
                    approved && (
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md" onClick={generateReport}>
                            Download Ticket
                        </button>
                    )
                }

            </div>


        </div>
    );
}

export default ReviewTickets;