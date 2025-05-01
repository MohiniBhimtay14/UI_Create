import React from 'react'

const Events = () => {
    const eventList = [
      { title: "Shaan-e-Diksha", date: "19 Jan" },
      { title: "Shaan-e-Seva", date: "21 Jan" },
    ];
    return (
      <div className="p-4">
        <h3 className="font-semibold mb-2">Events</h3>
        <div className="flex gap-2 overflow-x-scroll">
          {eventList.map((e, i) => (
            <div key={i} className="min-w-[150px] bg-white rounded-lg shadow p-2">
              <img src="/event.jpg" alt="Event" className="rounded" />
              <p className="text-sm font-medium mt-2">{e.title}</p>
              <p className="text-xs text-gray-500">{e.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Events
