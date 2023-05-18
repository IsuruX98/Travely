import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingReservation = ({ reservation, handleApprove, handleDecline }) => {
  return (
    <div className="flex flex-row items-center justify-between border border-gray-300 p-4 rounded-md">
      <div>
        <p className="font-medium">Reservation ID: {reservation._id}</p>
        <p>
          Start Date:{" "}
          {new Date(reservation.dateRange.startDate).toLocaleDateString()}
        </p>
        <p>
          End Date:{" "}
          {new Date(reservation.dateRange.endDate).toLocaleDateString()}
        </p>
        <p>Start Time: {reservation.timeRange.startTime}</p>
        <p>End Time: {reservation.timeRange.endTime}</p>
      </div>
      <div className="flex flex-row">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => handleApprove(reservation)}
        >
          Approve
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDecline(reservation)}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

const PendingReservationsPage = () => {
  const [pendingReservations, setPendingReservations] = useState([]);
  const fetchPendingReservations = async () => {
    try {
      const response = await axios.get("reservations/pending");
      setPendingReservations(response.data.pendingReservations);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDecline = async (reservation) => {
    try {
      await axios.put(`reservations/decline/${reservation._id}`);
      fetchPendingReservations();
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (reservation) => {
    try {
      await axios.put(`reservations/approve/${reservation._id}`);
      fetchPendingReservations();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPendingReservations();
  }, []);

  return (
    <>
      <div className="container mx-auto py-8" style={{ marginBottom: "25rem" }}>
        <h1 className="text-2xl font-bold mb-4">Pending Reservations</h1>
        {pendingReservations.length === 0 && (
          <p>No pending reservations at this time.</p>
        )}
        {pendingReservations.map((reservation) => (
          <PendingReservation
            key={reservation._id}
            reservation={reservation}
            handleApprove={handleApprove}
            handleDecline={handleDecline}
          />
        ))}
      </div>
    </>
  );
};

export default PendingReservationsPage;
