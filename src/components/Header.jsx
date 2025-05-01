import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-300 to-pink-200 rounded-b-lg">
    <div className="flex items-center gap-2">
      <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full" />
      <div>
        <h2 className="font-bold">Rushi Bhim</h2>
        <p className="text-xs text-gray-600">Good Morning</p>
      </div>
    </div>
    <div className="bg-white px-3 py-1 rounded-full shadow text-sm">4000💰</div>
  </div>
      
    </>
  )
}

export default Header
