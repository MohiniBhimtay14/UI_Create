import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCardGiftcard } from "react-icons/md";


export default function UserCard() {
  return (
    <div className="w-full  bg-gray-100 flex items-start justify-center p-4">
      <div className="w-full max-w-md bg-[#fdf0dc] rounded-xl shadow-md relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <FiMenu className="text-2xl" />
          <div className="text-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-8 mx-auto"
            />
          </div>
          <FaUserCircle className="text-2xl" />
        </div>

        {/* Profile Card */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow p-4 mx-4 -mt-6">
          <div className="flex items-center ">
            <img
              src="/Profile.jpg" 
              alt="Profile"
              className="w-5 h-5 rounded-full object-cover border"
            />
            <div className="ml-3">
              <h2 className="text-red-600 font-bold text-lg">विक्की जैन</h2>
              <p className="text-gray-700 text-sm">कार्यकारिणी सदस्य</p>
            </div>
          </div>
          <div className="flex items-center bg-red-100 text-red-600 px-3 py-1 rounded-full shadow-sm">
            <MdOutlineCardGiftcard className="mr-1" />
            <span className="font-bold">4000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
