import VehicleHero from "../../components/vehicle/VehicleHero";
import SearchBar from "../../components/vehicle/SearchBar";
import VehicleListHeader from "../../components/vehicle/VehicleListHeader";
import RentCarAd from "../../components/vehicle/RentCarAd";
import { useLocation } from "react-router-dom";
import VehicleCard from "../../components/vehicle/VehicleCard";

const VehicleHome = () => {
  
  const location = useLocation();
  const data = location.state;
  

  console.log("data:", data);
  

  return (
    <div>
      <VehicleHero />
      <SearchBar />
      <VehicleListHeader />
      <div className="md:px-24">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {data?.map((item) => (
            <VehicleCard
              brand={item.brand}
              model={item.model}
              price={item.price}
              transmissionType={item.transmissionType}
              fuelType={item.fuelType}
              capacity={item.capacity}
              vehicleMainImg={item.vehicleMainImg}
              id = {item._id}
            />
            
          ))}
        </div>
      </div>
      <RentCarAd />
    </div>
  );
};

export default VehicleHome;
