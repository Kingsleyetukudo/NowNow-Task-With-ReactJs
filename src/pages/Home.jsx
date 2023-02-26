import React from "react";
import curve from "../assets/CURVE1.png";
import BarChart from "../components/BarChart";
import DistributedChart from "../components/DistributedChart";
import GradientDonutChart from "../components/GradientDonutChart";
import LineChart from "../components/LineChart";

export default function Home() {
  return (
    <div className="w-90 m-auto flex flex-col gap-5">
      <div className="md:flex items-center gap-32 mt-1 border-b-2 py-5">
        <div className="mobile:mb-5">
          <h2 className="font-extrabold mb-2 text-lg">NIBSS</h2>
          <p className="text-sm md:text-lg font-medium mb-2">
            Bank Account Number: <span>0001631199</span>
          </p>
          <p className="text-sm md:text-lg font-medium">
            Main Wallet Balance: <span>3,000,000</span>
          </p>
        </div>

        <div className="flex gap-5">
          <div className="border flex items-center px-3 rounded-md">
            <input
              type="text"
              placeholder="Enter Money to settle"
              className="placeholder:text-sm"
            />
          </div>
          <button className="bg-brandColor font-bold px-5 py-2 text-sm rounded-md text-center">
            Transfer
          </button>
        </div>
      </div>

      <div className="md:flex gap-6 md:items-center justify-between mobile:flex mobile:flex-col">
        <div className="bg-brandColor rounded-md p-4 flex flex-col gap-2 md:w-1/3">
          <div className="flex gap-2 items-center">
            <span className="bg-boxTransparent flex rounded-md p-2">
              <i className="material-symbols-outlined text-white">
                account_balance_wallet
              </i>
            </span>
            <div>
              <p className="font-bold text-white text-lg">&#8358;7683</p>
              <p className="text-white text-sm">Main Wallet Balance</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-28">
              <img src={curve} alt="" />
            </div>
            <div className="flex items-center text-white self-end">
              <i className="material-symbols-outlined">calendar_today</i>
              <p className="text-sm">16 Dec, 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-md p-4 flex flex-col gap-2 md:w-1/3">
          <div className="flex gap-2 items-center">
            <span className="bg-gray-700 flex rounded-md p-2">
              <i className="material-symbols-outlined text-white">
                account_balance_wallet
              </i>
            </span>
            <div>
              <p className="font-bold text-white text-lg">&#8358;7683</p>
              <p className="text-white text-sm">Main Wallet Balance</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-28">
              <img src={curve} alt="" />
            </div>
            <div className="flex items-center text-white self-end">
              <i className="material-symbols-outlined">calendar_today</i>
              <p className="text-sm">16 Dec, 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-brandColor rounded-md p-4 flex flex-col gap-2 md:w-1/3">
          <div className="flex gap-2 items-center">
            <span className="bg-boxTransparent flex rounded-md p-2">
              <i className="material-symbols-outlined text-white">
                account_balance_wallet
              </i>
            </span>
            <div>
              <p className="font-bold text-white text-lg">&#8358;7683</p>
              <p className="text-white text-sm">Main Wallet Balance</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-28">
              <img src={curve} alt="" />
            </div>
            <div className="flex items-center text-white self-end">
              <i className="material-symbols-outlined">calendar_today</i>
              <p className="text-sm">16 Dec, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex gap-9 mobile:flex mobile:flex-col mobile:mb-3">
        <div className="md:w-1/2 border rounded-md">
          <BarChart />
        </div>
        <div className="md:w-1/2 border rounded-md">
          <LineChart />
        </div>
      </div>
      <div className="md:flex gap-9 mobile:flex mobile:flex-col">
        <div className="md:w-1/2 border rounded-md">
          <GradientDonutChart />
        </div>
        <div className="md:w-1/2 border rounded-md">
          <DistributedChart />
        </div>
      </div>
    </div>
  );
}
