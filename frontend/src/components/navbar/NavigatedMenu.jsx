import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import tour from "../../assets/data/tourCategoris";

const NavigatedMenu = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = path.split("/").pop();

  const Tour = tour.filter((tour) => tour.links === title);

  return (
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
            to={"/tours/home"}
            class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Tour Packages
          </Link>
        </li>
        <li>
          <AiOutlineRight className="mt-1 mx-2" />
        </li>
        <li class="text-neutral-500 dark:text-neutral-400">{Tour[0].title}</li>
      </ol>
    </nav>
  );
};

export default NavigatedMenu;
