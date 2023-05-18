import { useState, useEffect } from "react";
import axios from "axios";

function Reservation({ reservation, onCancel }) {
  const { _id, activity, status, dateRange, timeRange } = reservation;

  const startDate = new Date(dateRange.startDate).toLocaleDateString();
  const endDate = new Date(dateRange.endDate).toLocaleDateString();
  const startTime = timeRange.startTime;
  const endTime = timeRange.endTime;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{`Reservation ID: ${_id}`}</h2>
      </div>
      <p className="text-gray-600">{`Activity: ${activity?.name}`}</p>
      <p className="text-gray-600">{`Type: ${activity?.type}`}</p>
      <p className="text-gray-600">{`Status: ${status}`}</p>
      <p className="text-gray-600">{`Date: ${startDate} - ${endDate}`}</p>
      <p className="text-gray-600 mb-5">{`Time: ${startTime} - ${endTime}`}</p>
      <button
        onClick={() => onCancel(_id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Cancel
      </button>
    </div>
  );
}

function ReservationPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get("reservations").then((response) => {
      setReservations(response.data);
    });
  }, []);

  const cancelReservation = (reservationId) => {
    console.log(reservationId);
    axios.delete(`reservations/${reservationId}`).then(() => {
      setReservations((prevReservations) =>
        prevReservations.filter(
          (reservation) => reservation._id !== reservationId
        )
      );
    });
  };

  return (
    <>
      <div>
        <div className="bg-[#DEEFFF] flex items-center justify-between w-full flex-col lg:flex-row">
          <div className="p-8 pt-5 md:p-24 md:pt-5 lg:p-5">
            <h1 className="text-3xl md:text-3xl  font-bold uppercase  text-[#272727]">
              Reserve
              <span class="text-[#41A4FF]"> more..</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        className="max-w-xl mx-auto py-4 px-6 mt-10 "
        style={{ marginBottom: "25rem" }}
      >
        <h1 className="text-2xl font-bold mb-4">My Reservations</h1>
        {reservations.map((reservation) => (
          <Reservation
            key={reservation._id}
            reservation={reservation}
            onCancel={cancelReservation}
          />
        ))}
      </div>
    </>
  );
}

export default ReservationPage;
