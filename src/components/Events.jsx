import React from "react";
import { MapPin } from "lucide-react";

const EventCard = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="relative">
          <img
            src="./Event.png"
            alt="Event"
            className="w-full h-70 object-cover rounded-t-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
