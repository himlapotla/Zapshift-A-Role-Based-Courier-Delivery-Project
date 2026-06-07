import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'

const AdminDashboardHome = () => {

  const axios = useAxiosSecurity()

  const { data: deliveryStats = [] } = useQuery({
    queryKey: ['delivery-stats'],
    queryFn: async () => {
      const res = await axios.get('/parcels/delivery-status/stats')
      return res.data
    }
  })

  return (

    <div className="stats shadow">

      {
        deliveryStats.map(stat => <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title ">{stat._id}</div>
          <div className="stat-value">{stat.co}</div>
        </div>)
      }

    </div>

  )
}

export default AdminDashboardHome