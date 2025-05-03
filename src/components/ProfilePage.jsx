import React from "react";
import {
  Bell,
  ChevronRight,
  LogOut,
  MapPin,
  Notebook,
  Pencil,
  Settings,
  Star,
  ThumbsUp,
  User,
  UserCheck,
  HeartHandshake,
  Phone,
  MessageSquare,
  LifeBuoy,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User className="w-5 h-5 " />, label: "Profile" },
    { icon: <MapPin className="w-5 h-5" />, label: "My Area" },
    { icon: <Bell className="w-5 h-5" />, label: "Notification" },
    { icon: <HeartHandshake className="w-5 h-5" />, label: "My Contribution" },
    { icon: <Notebook className="w-5 h-5" />, label: "My Notes" },
    { icon: <Star className="w-5 h-5" />, label: "My Scores" },
    { icon: <Phone className="w-5 h-5" />, label: "Contact" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Feedback" },
    { icon: <LifeBuoy className="w-5 h-5" />, label: "Support" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-black p-4 flex justify-center">
      <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg">
        {/* Header */}
        <div className="relative bg-[#FBE9D9] px-6 pt-10 pb-6 text-center">
          {/* ✅ Back Arrow */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-3 left-3 text-gray-700 hover:text-black"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="absolute top-5 right-5 text-gray-500 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
  ⏻
</div>


          <div className="relative inline-block">
            <img
              src="./image.png"
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto border-4 border-white"
            />
            <button className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow">
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <h2 className="mt-4 font-semibold text-xl text-gray-800">
            Vikki Jain
          </h2>
          <p className="text-sm text-gray-600">Karyasamiti Sadasya</p>
        </div>

        {/* Menu */}
        <div className="divide-y">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 "
            >
              <div className="flex items-center gap-3 text-gray-700 ">
                {/* Icon Container with Red Background and Rectangular Shape */}
                <div className="bg-red-50 p-2 rounded-md">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-red-600">{item.label}</p>
                  <p className="text-xs text-gray-500">
                    Update and modify your profile
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2">
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
