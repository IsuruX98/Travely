import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddNewTrain() {

  const navigate = useNavigate();

  const [trainName, setTrainName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepature] = useState("");
  const [arrivalTime, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [noOfSeats, setnoOfSeats] = useState("");
  const [description, setdescription] = useState("");
  const [MaxBagage, setMaxBagage] = useState("");
  const [classType, setclassType] = useState("");
  const [cancelCharges, setcancelCharges] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newTrain = {
      trainName,
      from,
      to,
      arrivalTime,
      departureTime,
      date,
      price,
      noOfSeats,
      description,
      MaxBagage,
      classType,
      cancelCharges,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("/train/add", newTrain)
          .then(() => {
            Swal.fire("Train has been successfully Saved!", "", "success");
            navigate("/train")
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    });


  }

  return (
    <div>

      <h1 className='uppercase text-center py-16 text-2xl md:text-3xl font-bold'>Add New Train</h1>

      <div className="bg-[#DEEFFF]">
        <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">

          <form onSubmit={sendData}>

            <div className="relative mb-3 mt-5" >
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="trainName"
                onChange={(e) => {
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(e.target.value)) {
                    setTrainName(e.target.value);
                  }
                }}
                placeholder="Train Name"
                required
                maxLength={10}

              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="from"
                placeholder="from"
                onChange={(e) => {
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(e.target.value)) {
                    setFrom(e.target.value);
                  }
                }}
                required
                maxLength={10}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full  rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="to"
                placeholder="To"
                onChange={(e) => {
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(e.target.value)) {
                    setTo(e.target.value);
                  }
                }}
                required
                maxLength={10}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="time"
                className="bordder-[#E9EDF4] w-full  rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="depatureTime"
                placeholder="Depature Time"
                onChange={(e) => {
                  setDepature(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="time"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="arrivalTime"
                placeholder="Depature Time"
                onChange={(e) => {
                  setArrival(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="date"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="date"
                placeholder="Arrival Time"
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="price"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="noOfSeats"
                placeholder="Number of seats"
                onChange={(e) => {
                  setnoOfSeats(e.target.value);
                }}
                onKeyPress={(event) => {
                  // Only allow numbers
                  const charCode = event.which ? event.which : event.keyCode;
                  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="description"
                placeholder="Description"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="MaxBagage"
                placeholder="Max Bagages Weight"
                onChange={(e) => {
                  setMaxBagage(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="classType"
                placeholder="Class Type"
                onChange={(e) => {
                  setclassType(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3 mt-5">
              <input
                type="text"
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                id="cancelCharges"
                placeholder="Cancel Charges"
                onChange={(e) => {
                  setcancelCharges(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
