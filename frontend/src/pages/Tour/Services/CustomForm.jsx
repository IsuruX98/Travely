import React, { useState, useContext } from "react";
import { RiMapPin5Fill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import {
  TbMap2,
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
} from "react-icons/tb";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

const number = [1, 2, 3, 5, 7, 9, 12];
const CustomForm = () => {
  const [whereFrom, setFrom] = useState("");
  const [whereTo, setTo] = useState("");
  const [days, setDays] = useState(0);

  const { user } = useContext(AuthContext);
  console.log(user);

  const inputHandler = async (e) => {
    e.preventDefault();

    const currentUser = user.email;

    if (whereFrom === "" || whereTo === "" || days === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Must fill all fields!",
      });
      return;
    } else {
      const newForm = {
        currentUser,
        whereFrom,
        whereTo,
        days,
      };

      try {
        const result = await Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        });

        if (result.isConfirmed) {
          console.log(newForm);
          const response = await axios.post("/tours/customform", newForm);
          Swal.fire(response.data.message, "", "success");
        } else if (result.isDenied) {
          Swal.fire("Details are not saved", "", "error");
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      }
    }
  };
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6   lg:grid-cols-2 xl:gap-x-8 ">
        {/* how it works */}
        <div className="bg-[#41BBFF]">
          {/* upper-1 */}
          <div>
            <h1
              className="text-center p-3 mt-5 text-5xl "
              style={{ fontFamily: "popins" }}
            >
              How it Works{" "}
            </h1>
            <div className="p-8">
              <div className="flex flex-row relative p-3 text-lg ">
                <TbSquareRoundedNumber1Filled className="mr-10  text-white" />
                <p>Tell us details of your holiday plan</p>
              </div>
              <div className="flex flex-row relative p-3 text-lg ">
                <TbSquareRoundedNumber2Filled className="mr-10  text-white" />
                <p>Connect with our expert agents</p>
              </div>
              <div className="flex flex-row relative p-3 text-lg">
                <TbSquareRoundedNumber3Filled className="mr-10  text-white" />
                <p>Compare & customize further</p>
              </div>
              <div className="flex flex-row relative p-3 text-lg">
                <TbSquareRoundedNumber4Filled className="mr-10  text-white" />
                <p>Travel</p>
              </div>
            </div>
          </div>
          {/* mid */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  lg:grid-cols-2 xl:gap-x-8 ">
            <div>
              <p className="items-center text-2xl p-3 flex justify-center ">
                <IoPeopleSharp />
              </p>
              <div className="text-center p-2 text-xl">
                <p className="font-extrabold">200+ </p>
                <p>Verified Agents</p>
              </div>
            </div>
            <div>
              <p className="items-center text-2xl p-3 flex justify-center text-black ">
                <HiUserGroup />
              </p>
              <div className="text-center p-2 text-xl">
                <p className="font-extrabold">24/7</p>
                <p>Availablity</p>
              </div>
            </div>
          </div>
          <hr class="px-4 my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          {/* lower */}
          <div className="text-center p-4 text-xl">
            <div className="felx flex-row">
              <BsFillTelephoneOutboundFill className="inline-flex" />
              <p>Call us for details</p>
            </div>
            <p>0112224448/0112224449</p>
            <p>200+ Agents | 5M+ Travelers| 80+ Destination</p>
          </div>
        </div>
        {/* how it works end */}
        {/* Customize form */}
        <div className="shadow-2xl flex justify-center items-center">
          <div>
            <p className="items-center text-8xl p-3 flex justify-center text-blue-600">
              <TbMap2 />
            </p>
            <h2
              className="text-center text-3xl "
              style={{ fontFamily: "popins" }}
            >
              Where Do You Want to Go?
            </h2>
            <form action="" className="px-4 ">
              <div>
                <div>
                  <h6 className="mb-1">From Where</h6>
                  <div class="relative mb-3" data-te-input-wrapper-init>
                    <RiMapPin5Fill className="icon" />
                    <input
                      type="text"
                      class=" min-h-[auto] w-full rounded-lg  input border-4 divide-cyan-400"
                      id="exampleFormControlInputText"
                      onChange={(e) => {
                        setFrom(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h6 className="mb-1">To Where</h6>
                  <div class="relative mb-3" data-te-input-wrapper-init>
                    <RiMapPin5Fill className="icon" />
                    <input
                      type="text"
                      class=" min-h-[auto] w-full rounded-lg  input border-4 dborder-cyan-500"
                      id="exampleFormControlInputText"
                      onChange={(e) => {
                        setTo(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <div>
                      <h6 className="mb-5 text-center">Duration (Days)</h6>
                      <div class="relative mb-3" data-te-input-wrapper-init>
                        <div class="flex justify-center">
                          {/* <!-radio--> */}
                          {number.map((num) => (
                            <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                              <input
                                class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                type="radio"
                                name="days"
                                id="days"
                                value={num}
                                onChange={(e) => {
                                  setDays(e.target.value);
                                }}
                              />
                              <label
                                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                                for="inlineRadio1"
                              >
                                {num}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col justify-center mt-5">
                          {/* submit button */}
                          <button
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            onClick={inputHandler}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;
