import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import { Pie, PieChart } from 'recharts'

const AdminDashboardHome = () => {

  const axios = useAxiosSecurity()

  const { data: deliveryStats = [] } = useQuery({
    queryKey: ['delivery-stats'],
    queryFn: async () => {
      const res = await axios.get('/parcels/delivery-status/stats')
      return res.data
    }
  })
  console.log(deliveryStats)

  const chartData = (data) => {
    // return 
  }

  return (
    <div>

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
            <div className="stat-title text-lg">{stat._id}</div>
            <div className="stat-value">{stat.count}</div>
          </div>

          )

        }


      </div>

      <div>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={chartData}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#8884d8"
            label
            isAnimationActive={true}
          />
        </PieChart>
      </div>

    </div>

  )
}

export default AdminDashboardHome