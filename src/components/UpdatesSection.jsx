import React from "react";
import card1 from "../assets/Frame 1.png";
import card2 from "../assets/Frame 2.png";
import card3 from "../assets/Frame 3.png";
import card4 from "../assets/Frame 2.png";

const cards = [
  {
    image: card1,
    btnColor: "bg-red-500",
    textColor: "text-white",
    hideText: true, // hide title/desc for card 1
  },
  {
    title: "कार्यसमिति बैठक",
    description:
      "17 अप्रैल 2024 राति 8 बजे सेजुङ लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है",
    image: card2,
    btnColor: "bg-orange-300",
    textColor: "text-black",
  },
  {
    image: card3,
    btnColor: "bg-yellow-300",
    textColor: "text-black",
    hideText: true,
  },
  {
    title: "View All",
    description: "",
    image: card4,
    btnColor: "bg-orange-300",
    textColor: "text-black",
    isViewAll: true,
  },
];

const UpdatesSection = () => {
  return (
    <div className="flex justify-center">
      <div className=" py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-black-600 flex items-center gap-2 mb-6">
            {/* Image as Icon */}
            <img src="/lotus.png" alt="Icon" className="w-6 h-6 " />
            Updates
          </h2>

          {/* Scrollable container showing 1.5 cards */}
          <div className="max-w-[375px] overflow-x-auto flex gap-4 flex-nowrap scrollbar-hide px-1">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`min-w-[250px] h-[250px] rounded-xl p-4 shadow-md flex flex-col justify-between bg-cover bg-center ${item.textColor}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div>
                  {!item.hideText && item.title && (
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  )}
                  {!item.hideText && item.description && (
                    <p className="text-sm">{item.description}</p>
                  )}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-semibold">
                    {item.isViewAll ? "" : ""}
                  </span>
                  {!item.hideText && !item.isViewAll && (
                    <button
                      className={`w-8 h-8 flex items-center justify-center rounded-md ${item.btnColor} text-white`}
                    >
                      →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;
