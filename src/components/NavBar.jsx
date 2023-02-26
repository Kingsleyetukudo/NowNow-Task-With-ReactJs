import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/NowNow-Logo-1.svg";
import Footer from "./Footer";
import SideNavBar from "./SideNavBar";

export default function NavBar() {
  const [toggleSideBar, setToggleSidebar] = useState(false);

  const handleSideBar = (e) => {
    setToggleSidebar((sidebar) => !sidebar);
    console.log(e);
  };
  return (
    <div className="mobile:grid-cols-1 sidebar:grid-cols-1 grid grid-cols-homeScreen">
      <div className="sidebar:hidden mobile:hidden">
        <SideNavBar />
      </div>
      <div>
        <header className=" bg-white shadow-xl w-full">
          <nav className="flex justify-between items-center py-5 w-90 m-auto">
            <div className="md:hidden">
              <img src={Logo} alt="NowNow Logo" />
            </div>
            <div
              className="mobile:hidden cursor-pointer"
              onClick={handleSideBar}>
              <i className="material-symbols-outlined font-bold text-4xl">
                menu
              </i>
            </div>

            <div className="text-gray-500 flex gap-5 mobile:hidden">
              <i className="material-symbols-outlined text-3xl">mail</i>
              <i className="material-symbols-outlined text-3xl">
                calendar_today
              </i>
              <span className="flex relative">
                <span className="absolute left-4 bottom-5 bg-brandColor rounded-full px-1 text-white text-xs font-bold">
                  3
                </span>
                <i className="material-symbols-outlined text-3xl">
                  chat_bubble
                </i>
              </span>
              <span className="flex relative">
                <span className="absolute left-3 bottom-5 bg-red-500 rounded-full px-1 text-white text-xs font-bold">
                  3
                </span>
                <i className="material-symbols-outlined text-3xl">
                  notifications
                </i>
              </span>
              <i className="material-symbols-outlined text-3xl">settings</i>
            </div>
            <div className="flex gap-6 md:hidden">
              <span className="flex relative">
                <span className="absolute left-3 bottom-6 bg-red-500 rounded-full px-1 text-white text-xs font-bold">
                  3
                </span>
                <i className="material-symbols-outlined text-3xl">
                  notifications
                </i>
              </span>
              <i
                className="material-symbols-outlined font-bold text-4xl"
                onClick={handleSideBar}>
                menu
              </i>
            </div>
          </nav>
        </header>
        <div className="h-85vh overflow-auto flex flex-col gap-6">
          <main>
            <Outlet />
          </main>

          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>

        {toggleSideBar && (
          <div className="absolute top-0 w-full bg-bgTransparent">
            <span onClick={handleSideBar}>
              <i className="material-icons absolute right-7 top-5 text-white text-4xl">
                close
              </i>
            </span>
            <div>
              <SideNavBar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
