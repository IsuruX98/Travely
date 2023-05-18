import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const inside_nav = [
  {
    path: "/hotels",
    display: "Hotels",
  },
  {
    path: "/tours/home",
    display: "Tour Packages",
  },
  {
    path: "/vehicles",
    display: "Vehicles",
  },
  {
    path: "/Restaurants",
    display: "Restaurants",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/train",
    display: "Trains",
  },
];

const AdminNavbar = () => {
  const { user, loading, error, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="flex justify-between lg:px-32 md:px-22 px-12 w-full py-4 bg-gray-50 sticky top-0 z-[999]">
      <div className="flex items-center">
        <Link to="/admin" className="text-2xl font-bold text-[#41A4FF]">
          TravelyAdmin
        </Link>
      </div>

      {/* <!-- right header section --> */}
      <div className="items-center space-x-3 hidden md:flex">
        {user ? (
          <>
            <button className=""></button>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  {/* {user.name} */}
                  <img class="h-8 w-8 rounded-full" src={user.img} alt=""></img>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <h2 className="block px-4 py-2 text-sm text-[#41A4FF]">
                      {user.name}
                    </h2>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          to="/profile"
                        >
                          Profile
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={handleLogout}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-[#41A4FF] rounded-md"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-white bg-gray-400 rounded-md"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineMenu size={20} style={{ color: "black" }} />
        ) : (
          <AiOutlineClose size={20} style={{ color: "black" }} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray bg-white ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <Link to="/admin" className="text-2xl font-medium text-blue-500 m-8">
          Travely
        </Link>
        <ul className="px-4">
          {user ? (
            <>
              <button className=""></button>
              <Menu as="div" className="relative inline-block text-left p-4">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    {/* {user.name} */}
                    <img
                      class="h-8 w-8 rounded-full"
                      src={user.img}
                      alt=""
                    ></img>
                  </Menu.Button>
                  <h2 className="block py-2 text-sm text-[#41A4FF]">
                    {user.name}
                  </h2>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            to="/"
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <form>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          ) : (
            <>
              <li className="p-4 mt-8">
                <Link
                  to="/login"
                  className="px-3 py-2 text-sm text-blue-100 bg-[#41A4FF] rounded-md"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 ms-3  text-sm text-gray-200 bg-gray-400 rounded-md"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
