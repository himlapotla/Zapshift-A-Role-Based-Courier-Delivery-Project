import React from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'

const CompletedTask = () => {

  const { user } = UseAuth()
  const axios = useAxiosSecurity()

  const { refetch: parcleRefetch, data: parcel = [] } = useQuery({
    queryKey: ['parcell', user?.email],
    queryFn: async () => {
      const res = await axios.get(`/rider-parcels?riderEmail=${user?.email}&deliveryStatus=marked_as_delivered`)
      return res.data
    }
  })

  const Payment = (parcel) => {
    if (parcel.reciverDistrict === parcel.senderDistrict) {
      return parcel.cost * 0.5
    }
    else {
      return parcel.cost * 0.7
    }
  }

  return (
    <div>
      CompletedTask -- {parcel.length}

      <table className="table table-zebra">

        <thead>
          <tr className=''>
            <th>No.</th>
            <th>Parcel Name</th>
            <th>Sender Dis</th>
            <th>Receiver Dis</th>
            <th>Deli. Cost</th>
            <th>Your Payment</th>
            <th>Cashout</th>

          </tr>
        </thead>
        <tbody>
          {
            parcel.map((p, i) =>
              <tr >
                <td>{i + 1}</td>
                <td>{p.parcelName}</td>
                <td>{p.senderDistrict}</td>
                <td>{p.reciverDistrict}</td>
                <td>{p.cost}</td>
                <td>{Payment(p)}</td>
                <td>
                  <button className='btn bg-[#caeb69]'> Cash out </button>
                </td>
              </tr>
            )
          }

        </tbody>
      </table>
    </div>


  )
}

export default CompletedTask