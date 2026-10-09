import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'

const AdminDashboardHome = () => {

  const { user } = UseAuth()
  const axios = useAxiosSecurity()

  const { data } = useQuery({
    queryKey: ['admin-stat', user.email],
    queryFn: async () => {
      const res = await axios.get('/admin-dash')
      return res.data
    }
  
  })
  console.log(data)
  
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
        <h2 className="text-2xl font-bold text-[#81a909] mb-4">
          Quick Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Total Users */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.totalUsers || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Registered users
            </p>
          </div>


          {/* Total Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Parcels</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.result?.[0]?.totalParcels || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Parcels in the system
            </p>
          </div>


          {/* Active Riders */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active Riders</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.totalRiders || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Currently available riders
            </p>
          </div>


          {/* Delivered Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Delivered Parcels</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.result?.[0]?.deliveredParcels || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Successfully delivered
            </p>
          </div>


          {/* Total Revenue */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              ${data?.result?.[0]?.allRevenu || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Total payment received
            </p>
          </div>


          {/* Pending Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Parcels</p>

            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.result?.[0]?.pendingPickuppppp || 0}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Waiting to be delivered
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AdminDashboardHome

