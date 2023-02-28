import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/NowNow-Logo-1.svg";

export default function SideNavBar() {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleDropDown1 = () => {
    setToggleDropDown((dropDown) => !dropDown);
  };
  return (
    <div>
      <section>
        <div className="border max-w-275 h-screen bg-white shadow-sidebarShadow flex flex-col gap-5">
          <div className="flex items-center justify-center p-5 border-b-2">
            <img src={Logo} alt="" />
          </div>

          <ul className="px-5 flex flex-col gap-5 font-medium ">
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              <NavLink to="/form">Reports</NavLink>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              <NavLink to="/table">Transaction History</NavLink>
            </li>
            <li onClick={handleDropDown1}>
              <span className="flex items-center gap-2 cursor-pointer">
                <i className="material-icons text-gray-300 text-xl">circle</i>
                Employee Management
                <i
                  className={
                    toggleDropDown
                      ? "material-symbols-outlined rotate-90 transition-all duration-500"
                      : "material-symbols-outlined text-gray-600 text-xl ml-auto transition-all duration-500"
                  }>
                  chevron_right
                </i>
              </span>

              <ul
                className={
                  toggleDropDown
                    ? "h-85 bg-gray-300 -mx-5 mt-2 px-12 py-2 flex flex-col gap-5 transition-all duration-1000 ease-in-out"
                    : " h-0 transition-all duration-1000 ease-in-out overflow-hidden"
                }>
                <li>Manager Employee</li>
                <li>Modify Permission</li>
              </ul>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              Payment Outward
              <i className="material-symbols-outlined text-gray-600 text-xl ml-auto">
                chevron_right
              </i>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              Reveive Money
              <i className="material-symbols-outlined text-gray-600 text-xl ml-auto">
                chevron_right
              </i>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="material-icons text-gray-300 text-xl">circle</i>
              Chat Support
            </li>
          </ul>

          <div className="mt-auto border-t-2">
            <ul className="p-5 font-medium">
              <li className="flex items-center gap-2 text-brandColor cursor-pointer">
                <i className="material-icons  text-xl">circle</i>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
