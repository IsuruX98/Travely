import React ,{useState,useEffect} from "react";
import TrainHero from "../../components/train/TrainHero";
import SearchBar from "../../components/train/SearchBar";
import TrainCardAdmin from "../../components/train/TrainCardAdmin";
import TrainListheader from "../../components/train/TrainListheader";
import axios from "axios";
import { useLocation } from "react-router-dom";


const TrainHomeAdmmin = () => {

    const [trains,setTrains] = useState([]);

    useEffect(()=>{
        const getAllTrain = ()=>{
            axios.get("/train/").then((res)=>{
                console.log(res.data);
                setTrains(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }

        getAllTrain();
    },[])

   /* const location = useLocation();
    const data = location.state;

    console.log("data",data);*/

    return (
        <div>
            <TrainHero />  
            
            <TrainListheader />
            <div className="md:px-24">
                <div className="flex flex-wrap flex-col md:flex-row lg:mx-16 gap-[30px]">
                    {
                        trains.map((item)=>(
                            <TrainCardAdmin
                                trainName ={item.trainName}
                                from = {item.from}
                                to = {item.to}
                                arrivalTime={item.arrivalTime}
                                depatureTime = {item.depatureTime}
                                noOfSeats = {item.noOfSeats}
                                id={item._id}
                                price={item.price}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default TrainHomeAdmmin;