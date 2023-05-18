import React from "react";
import tourCategoris from "../../../assets/data/tourCategoris";
import { Link } from "react-router-dom";

const ServiceCategories = () => {
  return (
    <div className="bg-white ">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {tourCategoris.map((tours) => (
          <Link to={`/${tours.links}`}>
            <button type="button">
              <div
                key={tours.id}
                className="group relative  rounded-t-3xl shadow-2xl rounded-b-xl border-2 "
              >
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl lg:aspect-none group-hover:opacity-40 lg:h-80">
                  <img
                    src={tours.photo}
                    alt={tours.imageAlt}
                    className="h-full w-full object-cover object-center rounded-3xl p-4 lg:h-full lg:w-full"
                  />
                </div>

                <h3 className="text-2xl p-6 font-bold text-gray-700 text-center">
                  {tours.title}
                </h3>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
