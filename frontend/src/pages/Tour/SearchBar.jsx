import React, { useState } from "react";
import { RiMapPin5Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SearchBar = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [duration, setDays] = useState(0);
  const [maxsize, setGroup] = useState(0);

  const searchHandler = async (e) => {
    e.preventDefault();
    if (destination === "" || setDays === 0 || maxsize === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing required fields!",
      });
      return;
    }
    const numericValue = Number(destination);
    if (!isNaN(numericValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cannot Input Numbers to Destination!",
      });
      return;
    }
    navigate(`/tours/search/${destination}/${duration}/${maxsize}`);
  };

  return (
    <div>
      <form action="" className="flex-row items-center text-left gap-4">
        <div className="flex flex-row bg-slate-300 p-10 rounded-3xl opacity-75 drop-shadow-2lg">
          <div className=" flex flex-row gap-4 mr-2 ">
            <div>
              <h6 className="mb-1 ">Type a Destination</h6>

              <div class="relative mb-3" data-te-input-wrapper-init>
                <RiMapPin5Fill className="icon" />
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-lg  px-3 py-[0.32rem] leading-[1.6] outline-none input "
                  id="exampleFormControlInputText"
                  placeholder="Where are you going?"
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-4 mr-2">
            <div>
              <h6 className="mb-1">Select Duration</h6>

              <div class="relative mb-3" data-te-input-wrapper-init>
                <MdAccessTimeFilled className="icon" />
                <input
                  type="Number"
                  class="peer block min-h-[auto] w-full rounded-lg  px-3 py-[0.32rem] leading-[1.6] outline-none input "
                  id="exampleFormControlInputText"
                  placeholder="Days Count"
                  onChange={(e) => {
                    setDays(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-4 mr-2">
            <div>
              <h6 className="mb-1">Max People</h6>

              <div class="relative mb-3" data-te-input-wrapper-init>
                <BsPeopleFill className="icon" />
                <input
                  type="Number"
                  class="peer block min-h-[auto] w-full rounded-lg  px-3 py-[0.32rem] leading-[1.6] outline-none input "
                  id="exampleFormControlInputText"
                  placeholder="Group Size"
                  onChange={(e) => {
                    setGroup(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center mt-5">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="ml-2 flex items-center rounded-lg bg-primary px-2 py-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={searchHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-1 h-4 w-4"
              >
                <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
              </svg>
              Explore
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
