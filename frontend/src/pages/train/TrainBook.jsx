import React, { useEffect, useState } from "react";
import veh1 from '../../assets/TrainImages/singletrain.jpg'
import { FaStar, FaTrain } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const TrainBook = () => {
    const id = useParams().id;
    const [singleTrain, setSingleTrain] = useState({});

    useEffect(() => {
        const getOneTrain = () => {
            axios.get(`/train/get/${id}`).then((res) => {
                setSingleTrain(res.data);
            }).catch((err) => {
                console.log(err.message);
            })
        }
        getOneTrain();
    }, [id])

    useEffect(() => {
        localStorage.setItem('trainName', singleTrain.trainName);
        localStorage.setItem('price', singleTrain.price);
        localStorage.setItem('trainID', singleTrain._id);
        localStorage.setItem('TO',singleTrain.to)
        localStorage.setItem('FROM',singleTrain.from)
        localStorage.setItem('ATime',singleTrain.arrivalTime)
        localStorage.setItem('DTime',singleTrain.depatureTime)
    }, [singleTrain])

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden">
                    <div className="md:w-1/2">
                        <img src={veh1} alt="Train" className="object-cover h-80 w-full md:h-full md:w-auto" />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">{singleTrain.trainName}</h1>
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <p className="text-gray-600 text-sm">4.2</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaTrain className="text-gray-600 mr-2" />
                            <p className="text-gray-600 text-sm">{singleTrain.to} - {singleTrain.from}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <WiTime3 className="text-gray-600 mr-2" />
                            <p className="text-gray-600 text-sm">{singleTrain.depatureTime} - {singleTrain.arrivalTime}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdAirlineSeatReclineNormal className="text-gray-600 mr-2" />
                            <p className="text-gray-600 text-sm">{singleTrain.noOfSeats} Seats Available</p>
                        </div>
                        <div className="flex items-center mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">{singleTrain.price}</h1>
                        </div>
                        <Link to="/train/book/passengerDet">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full md:w-[350px] lg:w-[300px]">
                                BOOK
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrainBook;
