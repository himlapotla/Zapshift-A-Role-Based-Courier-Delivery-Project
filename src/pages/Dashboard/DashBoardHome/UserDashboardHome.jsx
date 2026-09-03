import React from 'react'

const UserDashboardHome = () => {
  return (
    <div className="min-h-[80vh] p-6">

      {/* Welcome Section */}
      <div className="rounded-2xl bg-[#caeb66] p-8 mb-6">
        <p className="text-md font-medium text-gray-700 mb-2">
          Welcome back 👋
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          My Dashboard
        </h1>

        <p className="mt-3 text-gray-700 max-w-xl">
          Track your parcels, check delivery progress, and manage your
          deliveries from one place.
        </p>
      </div>

      {/* Quick Overview */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Total Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">My Parcels</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Total parcels booked
            </p>
          </div>

          {/* In Transit */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">In Transit</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Parcels currently on the way
            </p>
          </div>

          {/* Delivered */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Delivered</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Successfully delivered
            </p>
          </div>

          {/* Pending */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Parcels</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Waiting for delivery
            </p>
          </div>

          {/* Total Spent */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Spent</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">$--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Total delivery payments
            </p>
          </div>

          {/* Canceled */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Canceled</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Canceled parcels
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default UserDashboardHome
