import React from 'react'

const NavBar = () => {
    const items = ["Home", "Events", "Birthdays", "Updates"];
    return (
      <div className="flex justify-between items-center px-4 py-2 bg-white shadow rounded-lg">
        {items.map((item) => (
          <div key={item} className="text-center text-sm">
            <div className="text-red-500">🏠</div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  };
      

export default NavBar
