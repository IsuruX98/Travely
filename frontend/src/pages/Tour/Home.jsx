import React from "react";

import HeroTour from "./HeroTour";
import HiddenPlaces from "./HiddenPlaces";

import ServiceCard from "./Services/ServiceCard";
import TourCategories from "./Services/ServiceCategories";
import TourNav from "../../components/navbar/TourNav";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CustomForm from "./Services/CustomForm";

import welcome from "../../assets/Tour/Tour-Welcome.jpg";

const Home = () => {
  return (
    <div>
      <HeroTour />

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

      {/* Navigation Tour bar */}
      <TourNav />

      {/* Categories */}
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        {/* welcome image */}
        <img src={welcome} alt="" />
        <h1 className="text-4xl mt-10 mb-10 ml-2">Tour Categories</h1>
        <TourCategories />
      </div>
      {/* Service Card Brief start */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-10 ml-2">Perfect Picks For You</h1>
        <ServiceCard />
        {/* <div className="flex justify-center items-center">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mt-20 inline-block rounded-xl bg-primary px-6 pb-2 pt-2.5 text-3xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <Link to={"/tourdetails"}></Link>
            View More
          </button>
        </div> */}
      </div>
      {/* Service Card Brief end*/}

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
        <h1 className="text-black uppercase text-center pt-0 mt-0 text-5xl">
          don't fit All these Packages to <br /> your unique interests and{" "}
          <br /> preferences?
        </h1>
      </div>

      {/* customer form */}
      <div>
        <CustomForm />
      </div>
      <div>
        <HiddenPlaces />
      </div>
    </div>
  );
};

export default Home;
