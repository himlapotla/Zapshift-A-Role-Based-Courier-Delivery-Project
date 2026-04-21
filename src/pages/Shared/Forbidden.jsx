import React from 'react'
import { Link } from 'react-router'

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      
      <div className="text-center max-w-lg">
        
        {/* Icon */}
        <div className="text-7xl mb-6 animate-pulse">🚫</div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          403 Forbidden
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-300 mb-6">
          You don’t have permission to access this page.  
          This area is restricted to administrators only.
        </p>

        {/* Extra hint */}
        <p className="text-sm text-gray-500 mb-8">
          If you think this is a mistake, contact your system administrator.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
              Go Home
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-2 border border-gray-400 hover:bg-gray-700 rounded-xl transition">
              Login as Admin
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Forbidden