import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function UserCard({ onMenuClick }) {
  const navigate = useNavigate(); // For navigation to profile

  return (
    <div className="w-full bg-gray-100 flex items-start justify-center p-4">
      <div className="w-full max-w-md bg-[#fdf0dc] rounded-xl shadow-md relative overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center justify-between p-4">
        <img
  src="/hamberger.png" // Replace with your actual file name
  alt="Menu"
  className="w-8 h-8 cursor-pointer"
  onClick={onMenuClick}
/>

          <div className="text-center">
            <img src="/logo.png" alt="logo" className="h-9 mx-auto" />
          </div>
          <img
  src="/Frame.png" // Replace with your actual file name
  alt="User Profile"
  className="w-8 h-8 rounded-full bg-white p-1 cursor-pointer"
  onClick={() => navigate("/profile")}
/>

        </div>

        {/* Profile Card */}
        <div className="flex items-center justify-between bg-[#fdf0dc] rounded-xl p-4">
          <div className="flex items-center">
            <img
              src="/image.png"
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
