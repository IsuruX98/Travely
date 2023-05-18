import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DoUpdateTrain = () => {

    const navigate = useNavigate();
    const id = useParams().id;
    const [singleTrain, setSingleTrain] = useState([]);

    useEffect(() => {
        const getOneTrain = () => {
            axios.get(`/train/get/${id}`).then((res) => {
                setSingleTrain(res.data)
                console.log(singleTrain)
            }).catch((err) => {
                console.log(err.message);
            })
        }
        getOneTrain();
    }, [id])

    const handleChanges = (event) => {
        const {name , value} = event.target;
        setSingleTrain((preTrain) =>({
            ...preTrain,
            [name] : value,
        }))

        console.log(singleTrain);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        axios.
            put(`/train/update/${id}`,singleTrain)
            .then(() => {
                Swal.fire({
                  title: "Do you want to save the changes?",
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Save",
                  denyButtonText: `Don't save`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                    navigate("/adminTrain")
                  } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                  }
                });
              })
              .catch((err) => Swal.fire("Not Updated", err.message, "error"));
    };
    

    return (
        <div>
            <h1 className='uppercase text-center py-16 text-2xl md:text-3xl font-bold'>Add New Train</h1>

            <div className="bg-[#DEEFFF]">
                <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">

                    <form>

                        <div className="relative mb-3 mt-5" >
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="trainName"
                                name = "trainName"
                                value={singleTrain.trainName}
                                onChange={handleChanges}
                                placeholder="Train Name"
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="from"
                                name="from"
                                placeholder="from"
                                value={singleTrain.from}
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full  rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="to"
                                name="to"
                                placeholder="To"
                                value={singleTrain.to}
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="time"
                                className="bordder-[#E9EDF4] w-full  rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="depatureTime"
                                name="depatureTime"
                                value= {singleTrain.depatureTime}
                                placeholder="Depature Time"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="time"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="arrivalTime"
                                name="arrivalTime"
                                value={singleTrain.arrivalTime}
                                placeholder="Depature Time"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="date"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="date"
                                name="date"
                                value={singleTrain.data}
                                placeholder="Arrival Time"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="price"
                                name="price"
                                value={singleTrain.price}
                                placeholder="Price"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="noOfSeats"
                                name="noOfSeats"
                                value={singleTrain.noOfSeats}
                                placeholder="Number of seats"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="description"
                                name="description"
                                value={singleTrain.description}
                                placeholder="Description"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="MaxBagage"
                                name="MaxBagage"
                                placeholder="Max Bagages Weight"
                                value={singleTrain.MaxBagage}
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="classType"
                                name="classType"
                                value={singleTrain.classType}
                                placeholder="Class Type"
                                onChange={handleChanges}
                            />
                        </div>

                        <div className="relative mb-3 mt-5">
                            <input
                                type="text"
                                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                                id="cancelCharges"
                                name="cancelCharges"
                                placeholder="Cancel Charges"
                                value={singleTrain.cancelCharges}
                                onChange={handleChanges}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DoUpdateTrain;