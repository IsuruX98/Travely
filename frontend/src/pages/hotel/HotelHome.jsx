import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { HotelHero } from "../../components/hotel/HotelHero";
import { HotelSearchBar } from "../../components/hotel/HotelSearchBar";
import HotelCard from "../../components/hotel/HotelCard";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchCard from "../../components/hotel/SearchCard";
import { AuthContext } from "../../context/authContext";

export const HotelHome = () => {
  const location = useLocation();
  const {data, date} = location.state ?? {};
  

  return (
    <div>
      <HotelHero />
      <HotelSearchBar />
      {data?.map((item) => (
        <SearchCard
        name={item.name}
        city={item.city}
        cheapestPrice={item.cheapestPrice}
        HotelImg={item.HotelImg}
        _id= {item._id}
        date={date}
        />
      
        
      ))}
      <h1 className="ml-10 mt-5  md:text-2xl  font-bold   text-[#272727]">
        Hotels guests love
      </h1>
      <HotelCard />
      
    </div>
  );
};
