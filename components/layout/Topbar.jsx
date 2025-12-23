import React from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-6 border-b bg-white">
      
      {/* Search */}
      <div className="flex-1 flex">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded px-3 py-2 pl-10 text-sm text-gray-900 bg-gray-50 border-gray-200"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop&crop=face"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm text-gray-700">Delicious Burger</span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
        
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
