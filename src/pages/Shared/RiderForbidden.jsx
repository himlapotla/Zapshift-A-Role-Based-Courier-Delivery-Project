import React from 'react'
import { Link } from 'react-router'

const RiderForbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">

        {/* Icon */}
        <div className="text-red-500 text-6xl mb-4">
          🚫
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Access Denied
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          You don’t have permission to access the Riders page.
          This section is restricted to authorized users only.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 bg-[#caeb66] text-black rounded-lg hover:bg-blue-600 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-6">
          Error Code: 403 Forbidden
        </p>
      </div>
    </div>
  )
}

export default RiderForbidden