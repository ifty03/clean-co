import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../Pages/Home/Banner/Banner";

const NavBar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar lg:px-[80px] h-[74px]">
          <div className="flex-1 px-2 mx-2">Clean co</div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink className="rounded-lg mx-2" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg mx-2" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg mx-2" to="/service">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink className="rounded-lg mx-2" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="rounded-lg mx-2 btn btn-outline btn-primary"
                  to="/contact"
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Banner />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink
              className="rounded-lg mx-2 btn btn-outline btn-primary"
              to="/contact"
            >
              Book Now
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
