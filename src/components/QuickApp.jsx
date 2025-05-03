import React from "react";

const quickLinks = [
  { icon: <img src="/icons/Poll.png" alt="Poll" width={24} height={24} />, label: "Poll" },
  { icon: <img src="/icons/Knowledge.png" alt="Knowledge" width={24} height={24} />, label: "Knowledge" },
  { icon: <img src="/icons/Download.png" alt="Download" width={24} height={24} />, label: "Download" },
  { icon: <img src="/icons/More.png" alt="More" width={24} height={24} />, label: "More" }
];

export default function QuickLinks() {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl shadow-md p-4 w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold text-black-600 flex items-center gap-2 mb-6">
          {/* Image as Icon */}
          <img src="/lotus.png" alt="Icon" className="w-6 h-6" />
          Quick Links
        </h2>

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
