import React from "react";
import { MapPin } from "lucide-react";

const events = [1, 2]; // Replace with your real event data

const EventCard = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-[375px] p-4 ">
      <div className="flex justify-between items-center mb-6">
  <h2 className="text-xl font-bold text-black-600 flex items-center gap-2">
    <img src="/lotus.png" alt="Icon" className="w-6 h-6" />
    Events
  </h2>
  <button className="text-white  bg-red-500 p-2">View All</button>
</div>

      
     

        {/* Scrollable card row: shows 1.5 cards */}
        <div className="flex gap-4 overflow-x-auto flex-nowrap scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200">
          {events.map((event, index) => (
            <div
              key={index}
              className="snap-start min-w-[250px] bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <div className="relative">
                <img
                  src="./Event.png"
                  alt="Event"
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Event Title {event}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location Here
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
