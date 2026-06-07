import React from 'react'
import { useParams } from 'react-router'
import useAxios from '../../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'

const ParcelTrack = () => {

  const { trackingId } = useParams()
  const axios = useAxios()

  const { data: tracking = [] } = useQuery({
    queryKey: ['tracking', trackingId],
    queryFn: async () => {
      const res = await axios.get(`/tracking/${trackingId}`)
      return res.data
    }
  })

  return (
    <div className='mt-8 mb-12 p-10 rounded-3xl border-5 border-[#caeb66] flex justify-center mx-auto w-10/12'>

      <ul className="timeline timeline-vertical lg:timeline-horizontal">

        {
          tracking.map((log, index) => <li className='p-4'>


            <div className="timeline-start">
              <p>{new Date(log.createdAt).toLocaleDateString()}</p>
              <p>{new Date(log.createdAt).toLocaleTimeString()}</p>
            </div>

            <div className="timeline-middle">
              <div className="w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
            </div>
            
            <div className="timeline-end timeline-box text-[15px]">{log.details}</div>

          </li>)
        }
      </ul>

    </div>
  )
}

export default ParcelTrack