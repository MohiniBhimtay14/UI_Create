export default function App() {
  return (
    <div className="flex justify-center">
      <div className=" min-h-screen p-6 space-y-6 w-full max-w-sm">
        {/* News Heading */}
        <h2 className="text-2xl font-semibold text-black text-center">News</h2>

        {/* News Cards - Single visible card, scrollable */}
        <div className="flex gap-4 overflow-x-auto pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative snap-center min-w-full h-[260px] bg-cover bg-center rounded-xl flex-shrink-0"
              style={{ backgroundImage: `url('/Swipe News.png')` }}
            >
             
            </div>
          ))}

          {/* View All Card */}
          <div className="snap-center min-w-full h-[260px] bg-gray-900 text-white rounded-xl flex items-center justify-center flex-col flex-shrink-0">
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
