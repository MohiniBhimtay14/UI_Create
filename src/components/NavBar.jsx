import {
  HomeIcon,
  TrophyIcon,
  UsersIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";


const tabs = [
  { label: "Home", icon: HomeIcon },
  { label: "Leaderboard", icon: TrophyIcon },
  { label: "Community", icon: UsersIcon },
  { label: "My Area", icon: MapPinIcon },
  { label: "Chats", icon: ChatBubbleLeftRightIcon },
];

export default function App() {
  return (
    <div className="bg-white min-h-screen p-6 space-y-6">
      {/* News Heading */}
      <h2 className="text-2xl font-semibold text-black">News</h2>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md rounded-2xl px-6 py-4 flex justify-between items-center w-full max-w-3xl mx-auto">
        {tabs.map((tab) => (
          <div key={tab.label} className="flex flex-col items-center text-sm text-gray-600 hover:text-red-500 transition">
            <tab.icon className="h-6 w-6 mb-1" />
            {tab.label}
          </div>
        ))}
      </div>

      {/* News Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pt-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative min-w-[220px] h-[260px] bg-cover bg-center rounded-xl flex-shrink-0"
            style={{ backgroundImage: `url('https://source.unsplash.com/400x300/?temple,${i}')` }}
          >
            <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
              3 mins ago
            </div>
            <div className="absolute bottom-2 left-2 right-2 text-white font-medium text-sm leading-snug">
              महातपस्वी की मंगल समिति में आयोजित हुआ ज्ञानशाला दीक्षान्त समारोह
            </div>
          </div>
        ))}

        {/* View All Card */}
        <div className="min-w-[220px] h-[260px] bg-gray-900 text-white rounded-xl flex items-center justify-center flex-col">
          <span className="text-xl font-semibold">View All</span>
          <button className="mt-3 bg-red-500 p-3 rounded-full">
            <span className="text-white text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
