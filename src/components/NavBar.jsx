export default function App() {
  return (
    <div className="flex justify-center">
      <div className="p-6 space-y-6 w-full max-w-[375px]">
        {/* News Heading */}
        <h2 className="text-xl font-bold text-black-600 flex items-center gap-2">
          {/* Image as Icon */}
          <img src="/lotus.png" alt="Icon" className="w-6 h-6" />
          News
        </h2>
        {/* News Cards - 1.5 visible cards, scrollable */}
        <div className="flex gap-4 overflow-x-auto pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative snap-start min-w-[250px] h-[260px] bg-cover bg-center rounded-xl flex-shrink-0"
              style={{ backgroundImage: `url('/Swipe News.png')` }}
            ></div>
          ))}

          {/* View All Card */}
          <div className="snap-start min-w-[250px] h-[260px] bg-gray-900 text-white rounded-xl flex items-center justify-center flex-col flex-shrink-0">
            <span className="text-xl font-semibold">View All</span>
            <button className="mt-3 bg-red-500 p-3 rounded-full">
              <span className="text-white text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
