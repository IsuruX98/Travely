import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import TourNav from "../../components/navbar/TourNav";
import axios from "axios";

const image = {
  backgroundImage:
    "url('https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/header%20photo.jpg?alt=media&token=81dbb6a1-7b18-473d-a151-dbe0a59e8bb7')",
  height: "300px",
  backgroundPosition: "50%",
};

const SerachResults = () => {
  const { destination, duration, maxsize } = useParams();

  const [loading, setLoading] = useState(true);
  const [filteredTours, setTour] = useState([]);
  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get("/tours");
        const tours = response.data.filter((tour) => {
          return (
            tour.cities.split(",").includes(destination) ||
            tour.duration == duration ||
            tour.groupCount == maxsize
          );
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
  }, []);
  console.log("filtered tours:", filteredTours);
  return (
    // <!-- Container for demo purpose -->
    <div>
      <div className="">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover "
          style={image}
        >
          <div class="flex h-full items-center justify-center text-center">
            <div>
              <h2
                class="mb-5  text-6xl font-bold text-black "
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Search Results
              </h2>
              <div>
                <div className="mt-12 w-1/2 mr-auto ml-auto">
                  <h4
                    class="mt-5 mb-6 text-xl  uppercase animate-bounce text-white text-center"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "normal",
                      border: "solid 1px  white",
                      textShadow: "3px 1px black",
                    }}
                  >
                    an island awaits you <br />
                    Discover sri Lanka
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigated menu start*/}
      <nav class="bg-grey-light w-full rounded-md pl-20 pt-10">
        <ol class="list-reset flex">
          <li>
            <Link
              to={"/"}
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Home
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li>
            <Link
              to={"#"}
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Tour Packages
            </Link>
          </li>
          <li>
            <AiOutlineRight className="mt-1 mx-2" />
          </li>
          <li class="text-neutral-500 dark:text-neutral-400">
            Explore Sri Lanka
          </li>
        </ol>
      </nav>
      {/* Navigated menu end*/}
      <TourNav />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-10 ml-2">
          Results Found : {filteredTours.length}
        </h1>
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
          <div className="bg-white ">
            {filteredTours.length !== 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {filteredTours.map((tours) => (
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
                ))}
              </div>
            ) : (
              <div className="text-center text-lg">No Matching Items Found</div>
            )}
          </div>
        )}
        <div className="flex justify-center items-center"></div>
      </div>
    </div>
    // <!-- Container for demo purpose -->
  );
};

export default SerachResults;
