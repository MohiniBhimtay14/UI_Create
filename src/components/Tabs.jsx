import React from 'react'

const Tabs = () => {
    const tabs = ["Sangathan", "Sangathan", "Sangathan"];
    return (
      <div className="space-y-2 p-4">
        {tabs.map((tab, i) => (
          <button key={i} className="w-full bg-white py-2 px-4 rounded-lg shadow border">
            {tab} ⌄
          </button>
        ))}
      </div>
    );
  };
  

export default Tabs
