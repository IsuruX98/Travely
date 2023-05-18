import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


const SearchCard = (item) => {


  
  const navigate = useNavigate();
  const location = useLocation();
  console.log(item.date)
  const date= item.date

  const handleClick = () => {
    navigate(`/hotel/${item._id}`, { state: date  });
  };

  
 
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-8">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        
        
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                key={item.id}
              >
                <img
                  src={`hotels/images/${item.HotelImg}`}
                  alt=""
                  className="w-full object-cover h-64"
                />
                <div className="p-4">
                  <h2 className="font-bold text-gray-700 text-lg mb-2">
                    {item.name}
                  </h2>
                  <p className="font-light text-gray-500 mb-2">{item.city}</p>
                  <p className="font-medium text-gray-900 mb-2">
                    Starting from Rs.{item.cheapestPrice}
                  </p>
                  <div className="flex items-center">
                  
                    <button onClick= {handleClick} className="bg-blue-700 text-white font-bold px-3 py-1 rounded mr-2" type="button">
                      View
                    </button>
                    
                  </div>
                </div>
              </div>
            
          
        
      </div>
    </div>
  );
};

export default SearchCard;
