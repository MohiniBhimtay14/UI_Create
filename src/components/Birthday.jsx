import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import profile1 from "@/assets/Face1.jpg";
import profile2 from "@/assets/Face2.jpg";

const birthdays = [
  {
    name: "विवेक जैन",
    role: "Padadhikari Prabhari",
    image: profile1,
  },
  {
    name: "",
    role: "Padadhikari Prabhari",
    image: profile2,
  },
];

export default function Birthdays() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  bg-white p-4 rounded-xl shadow-md w-full max-w-[350px]">

      <div className="text-left">
  <h2 className="text-xl font-bold text-black-600 flex gap-2">
    {/* Image as Icon */}
    <img src="/lotus.png" alt="Icon" className="w-6 h-6" />
    Birthdays
  </h2>
</div>


        <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide w-full">
          <div className="flex w-[500px]"> {/* Container for cards with enough width to show 1.5 cards */}
            {birthdays.map((person, index) => (
              <Card
                key={index}
                className={`w-[220px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative ${
                  index === 1 ? "opacity-50" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={person.image}
                    alt={person.name || "Profile"}
                    className="h-48 w-full object-cover rounded-2xl"
                  />
                </div>

                <CardContent className="p-3">
                  <h3 className="text-lg font-semibold text-center text-gray-900">
                    {person.name || <span className="text-gray-400">नाम</span>}
                  </h3>
                  <p className="text-sm text-center text-gray-600">
                    {person.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button className="mt-4 bg-white text-red-500 border border-red-500 hover:bg-red-50">
          Upcoming Birthdays
        </Button>
      </div>
    </div>
  );
}
