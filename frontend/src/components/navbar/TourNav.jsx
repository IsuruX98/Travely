import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const nav_links = [
  {
    path: "/tours/home",
    display: "Explore SriLanka",
  },
  {
    path: "/sunandbeach",
    display: "Sun and Beach",
  },
  {
    path: "/hikingandtrekking",
    display: "Hiking and Trekking",
  },
  {
    path: "/wildsafari",
    display: "Wild Safari",
  },
  {
    path: "/cultural",
    display: "Cultural",
  },
  {
    path: "/special",
    display: "Special Tours",
  },
  {
    path: "/festival",
    display: "Festivals",
  },
];

const TourNav = () => {
  return (
    <div>
      <nav className="w-screen flex justify-around py-4 bg-[#FFFFF] sticky top-0">
        <div className="items-center hidden space-x-5 md:flex">
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex space-x-8  w-full justify-center rounded-md px-3 py-2">
                  {nav_links.map((item, index) => (
                    <Menu>
                      {
                        <Link
                          className=" hover:bg-[#41A4FF] hover:text-white px-3 py-5 rounded-lg"
                          to={item.path}
                        >
                          {item.display}
                        </Link>
                      }
                    </Menu>
                  ))}
                </Menu.Button>
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TourNav;
