import React from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const AssignedTasks = () => {

    const { user } = UseAuth()
    const axios = useAxiosSecurity()

    const { refetch: parcleRefetch, data: parcel = [] } = useQuery({
        queryKey: ['parcell', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/rider-parcels?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
            return res.data
        }
    })

    const handleDeliveryStatus = (parcel, status) => {
        const statusInfo = { deliveryStatus: status, riderId: parcel.rider_id }
        let messeg = `Parcle Status is updated with ${status.split('_').join(' ')}`

        axios.patch(`/parcel/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    parcleRefetch()
                    Swal.fire({
                        title: messeg,
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    return (
        <div>
            <table className="table table-zebra">

                <thead>
                    <tr className=''>
                        <th>No.</th>
                        <th>Parcel Name</th>
                        <th>Dropping place</th>
                        <th>Confirm</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcel.map((p, i) =>
                            <tr >
                                <th>{i + 1}</th>
                                <td>{p.parcelName}</td>
                                <td>{p.reciverDistrict}</td>
                                <td >
                                    {
                                        p.deliveryStatus === 'driver_assigned' ? <>
                                            <button className='btn-sm mx-1 p-1 bg-green-400' onClick={() => handleDeliveryStatus(p, 'rider_arriving')}> Accept </button>
                                            <button className='btn-sm p-1 bg-red-400'> Reject </button>
                                        </>
                                            :
                                            <span className='text-green-600 font-bold'> Accepted </span>
                                    }
                                </td>

                                <td>
                                    {
                                        (p.deliveryStatus === 'rider_arriving' || p.deliveryStatus === 'marked_as_picked_up') &&
                                        <>
                                            <button className='btn-sm mx-1 p-1 bg-green-400' onClick={() => handleDeliveryStatus(p, 'marked_as_picked_up')}> Mark as Pickup </button>

                                            <button className='btn-sm mx-1 p-1 bg-green-400' onClick={() => handleDeliveryStatus(p, 'marked_as_delivered')}> Mark as Delivered </button>

                                        </>
                                    }
                                </td>


                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AssignedTasks
