import React from "react";
import { FaPoll, FaBook, FaDownload, FaEllipsisH } from "react-icons/fa";

const quickLinks = [
  { icon: <FaPoll size={24} />, label: "Poll" },
  { icon: <FaBook size={24} />, label: "Knowledge" },
  { icon: <FaDownload size={24} />, label: "Download" },
  { icon: <FaEllipsisH size={24} />, label: "More" },
];

export default function QuickLinks() {
  return (
    <div className="flex justify-center">
    <div className=" rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
  
        <span className="text-red-600 text-2xl">🌺</span>
        <h2 className="text-lg font-bold text-gray-800">Quick Links</h2>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 flex justify-between">
        {quickLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-center text-gray-600">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-1">
              {link.icon}
            </div>
            <span className="text-sm">{link.label}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
