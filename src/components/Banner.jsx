import React from 'react'

const Banner = () => (
    <div className="relative m-4">
      <img src="/banner.jpg" alt="Banner" className="rounded-lg" />
      <button className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        View All
      </button>
    </div>
  );
  

export default Banner
