import React, { useEffect, useState } from "react";
import NavigatedMenu from "../navbar/NavigatedMenu";
import TourNav from "../navbar/TourNav";
import HeroTour from "../../pages/Tour/HeroTour";
import axios from "axios";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Beach = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = path.split("/").pop();
  console.log("title", title);

  const [filterdTours, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    try {
      const response = await axios.get("/tours");
      const tours = response.data.filter((tour) => {
        const category = tour.category.toLowerCase().replace(/\s+/g, "");
        console.log("category", category);
        return category === title;
      });

      console.log(tours);
      setTour(tours);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  getTours();

  return (
    <div>
      <HeroTour />
      <NavigatedMenu />
      <TourNav />

      {loading ? (
        <div className="text-center text-lg">
          <div
            class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div>
          {filterdTours.length !== 0 ? (
            <div className="bg-white grid grid-cols-4 px-36 gap-10 mb-20">
              {filterdTours.map((tours) => (
                <div>
                  <div
                    key={tours._id}
                    className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 "
                  >
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80">
                      <img
                        src={tours.img}
                        alt="Tour"
                        className="h-full w-full object-cover object-center rounded-3xl lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between p-3">
                      <h3 className="text-2xl font-bold text-gray-700">
                        <Link to={`/tours/${tours._id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-t-3xl "
                          />
                          {tours.name}
                        </Link>
                        <p className="text-lg font-medium text-gray-900">
                          {tours.duration} days
                        </p>
                      </h3>
                      {/* <div className=" flex flex-row mr-2 space-x-3">
                  <p className="mt-1 text-lg text-gray-500 ">{tours.avgRating}</p>
                  <AiFillStar className="text-xl mt-2 text-yellow-500 " />
                  <p className="mt-1 text-lg">({tours.reviews.length})</p>
                </div> */}
                    </div>
                    <div className="flex flex-row mr-2 space-x-3 justify-between">
                      <p className="text-sm text-left p-2 font-bold">
                        From ${tours.price}
                      </p>
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="mb-2 inline-block rounded bg-primary px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        onClick={console.log(tours._id)}
                      >
                        <Link to={`/tours/${tours._id}`}>View Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-lg mb-20">
              No Matching Items Found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Beach;
