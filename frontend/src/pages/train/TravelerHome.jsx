import React ,{useState,useEffect} from "react";
import TrainHero from "../../components/train/TrainHero";
import SearchBar from "../../components/train/SearchBar";
import TrainCard from "../../components/train/TrainCard";
import TrainListheader from "../../components/train/TrainListheader";
import BookTrainAd from "../../components/train/BookTrainAd";
import axios from "axios";
import { useLocation } from "react-router-dom";


const TravelerHome = () => {

   /* const [trains,setTrains] = useState([]);

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
    },[])*/

    const location = useLocation();
    const data = location.state;

    console.log("data",data);



    return (
        <div>
            <TrainHero />
            <SearchBar />
            <TrainListheader />
            <div className="md:px-24">
                <div className="flex flex-wrap flex-col md:flex-row lg:mx-16 gap-[30px]">
                    {
                        data?.map((item)=>(
                            <TrainCard
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
            <BookTrainAd/>

        </div>
    )
}

export default TravelerHome;