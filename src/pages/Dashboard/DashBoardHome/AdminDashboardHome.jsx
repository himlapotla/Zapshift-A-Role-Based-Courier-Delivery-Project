import React from 'react'



const AdminDashboardHome = () => {
  return (
    <div className="min-h-[80vh] p-6">

      {/* Welcome Section */}
      <div className="rounded-2xl bg-[#caeb66] p-8 mb-6">
        <p className="text-md font-medium text-gray-700 mb-2">
          Welcome back, Admin 👋
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-gray-700 max-w-xl">
          Manage your users, parcels, riders and keep track of everything
          happening in your delivery system.
        </p>
      </div>

      {/* Quick Overview */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Quick Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Registered users
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Parcels</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Parcels in the system
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active Riders</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">
              Currently available riders
            </p>
          </div>

          {/* Delivered Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Delivered Parcels</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3>
            <p className="text-sm text-gray-500 mt-2">Successfully delivered</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-3xl font-bold text-gray-800 mt-2">$--</h3>
            <p className="text-sm text-gray-500 mt-2">Total payment received</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"> 
            <p className="text-sm text-gray-500">Pending Parcels</p> 
            <h3 className="text-3xl font-bold text-gray-800 mt-2">--</h3> 
            <p className="text-sm text-gray-500 mt-2">Waiting to be delivered</p> 
          </div>

        </div>
      </div>

    </div>
  )
}

export default AdminDashboardHome
