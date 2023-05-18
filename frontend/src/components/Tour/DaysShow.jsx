import React from "react";
import { MdTour } from "react-icons/md";
import { BiMapPin } from "react-icons/bi";
import tourData from "../../assets/data/tours";

const DaysShow = () => {
  const tour = tourData.find((tour) => tour.id === 1);
  //destructure
  const { dayDetails } = tour;
  return (
    <div>
      <div className="text-5xl  mb-11">
        <p>Day Description</p>
      </div>
      <div>
        <ul
          class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
          data-te-stepper-init
          data-te-stepper-type="vertical"
        >
          {/* <!--First item--> */}
          {dayDetails.map((details) => (
            <li
              data-te-stepper-step-ref
              class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
            >
              <div
                data-te-stepper-head-ref
                class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#41A4FF]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-xl font-medium text-[#40464f]"
                >
                  {details.day}
                </span>
                <span
                  data-te-stepper-head-text-ref
                  class="text-neutral-500 text-2xl after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-black"
                >
                  <div className="flex flex-row gap-3">
                    Day {details.day}
                    {details.day === "1" ? (
                      <BiMapPin className="text-red-500 text-3xl" />
                    ) : (
                      <MdTour className="text-[#15A891] text-3xl" />
                    )}
                  </div>
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                class="transition-[height, margin-bottom, padding-top, padding-bottom]
         text-xl left-0 overflow-hidden pb-6  duration-300 ease-in-out pl-24"
              >
                {details.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DaysShow;
