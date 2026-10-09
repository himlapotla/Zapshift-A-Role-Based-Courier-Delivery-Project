import { useQuery } from '@tanstack/react-query'
import React from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'

const RiderDashboardHome = () => {

  const { user } = UseAuth()
  const axios = useAxiosSecurity()

  const { data } = useQuery({
    queryKey: ['rider-parcle', user.email],
    queryFn: async ()=> {
      const res = await axios.get(`/rider-stat?email=${user?.email}`)
      return res.data
    }
  })
  console.log(data)

  return (
    <div className="min-h-[80vh] p-6">

      {/* Welcome Section */}
      <div className="rounded-2xl bg-[#caeb66] p-8 mb-6">
        <p className="text-md font-medium text-gray-700 mb-2">
          Welcome back, Rider 👋
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Rider Dashboard
        </h1>

        <p className="mt-3 text-gray-700 max-w-xl">
          Manage your assigned parcels, track your deliveries, and keep an
          eye on your earnings from one place.
        </p>
      </div>

      {/* Quick Overview */}
      <div>
        <h2 className="text-2xl font-semibold text-[#81a909] mb-4">
          Quick Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Assigned Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Your Parcels</p>
            <h3 className="text-3xl  font-bold text-[#81a909] mt-2"> 
              {data?.[0]?.totaParcel?.[0]?.count} 
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Total Parcels to you
            </p>
          </div>

          {/* Pending Deliveries */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Assigned Parcels</p>
            <h3 className="text-3xl font-bold text-[#81a909] mt-2"> 
              { data?.[0]?.assigned?.[0]?.count }
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Deliveries waiting to be completed
            </p>
          </div>

          {/* Delivered Parcels */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Delivered Parcels</p>
            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              {data?.[0]?.delivered?.[0]?.count}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Successfully delivered
            </p>
          </div>

          {/* Today's Deliveries */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Today's Deliveries</p>
            <h3 className="text-3xl font-bold text-[#81a909] mt-2"> 0 </h3>
            <p className="text-sm text-gray-500 mt-2">
              Deliveries completed today
            </p>
          </div>

          {/* Total Earnings */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Earnings</p>
            <h3 className="text-3xl font-bold text-[#81a909] mt-2">
              ${ data?.[0]?.myEarning?.[0]?.totalEarning }
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Your total delivery earnings
            </p>
          </div>

          {/* Delivery Rate */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Delivery Rate</p>
            <h3 className="text-3xl font-bold text-[#81a909] mt-2"> 40% | 50% </h3>
            <p className="text-sm text-gray-500 mt-2">
              Successfully completed deliveries
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default RiderDashboardHome