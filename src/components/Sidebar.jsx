import React from "react";
import {
  X,
  Users,
  ListChecks,
  MessageCircle,
  Book,
  GraduationCap,
  BarChart,
  MapPin,
  FileText,
  RefreshCw,
  Download,
  Newspaper,
  HelpCircle,
  Settings,
  Target,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <Target className="w-5 h-5" />, label: "My Task" },
    { icon: <Users className="w-5 h-5" />, label: "My Community" },
    { icon: <BarChart className="w-5 h-5" />, label: "Leaderboard" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Chats" },
    { icon: <Book className="w-5 h-5" />, label: "Courses" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Knowledge" },
    { icon: <ListChecks className="w-5 h-5" />, label: "Polls" },
    { icon: <MapPin className="w-5 h-5" />, label: "Contributions" },
    { icon: <FileText className="w-5 h-5" />, label: "Quizzes" },
    { icon: <RefreshCw className="w-5 h-5" />, label: "Updates" },
    { icon: <Download className="w-5 h-5" />, label: "Downloads" },
    { icon: <Newspaper className="w-5 h-5" />, label: "News" },
    { icon: <HelpCircle className="w-5 h-5" />, label: "FAQ's" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen w-72 bg-white shadow-xl flex flex-col">
      {/* Profile Header */}
      <div className="relative px-4 py-6 border-b">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4">
          <img
            src="/image.png"
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold">Vikki Jain</h3>
            <p className="text-xs text-gray-500">Karyasamiti Sadasya</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Version */}
      <div className="text-center text-xs text-gray-400 py-3 border-t">
        Version 89799.00
      </div>
    </div>
  );
};

export default Sidebar;
