import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQueries, useQuery } from '@tanstack/react-query'
import { FaUserCheck, FaUserTimes } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Swal from 'sweetalert2'

const ApproveRider = () => {

    const axios = useAxiosSecurity()

    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['rider', 'pending'],
        queryFn: async () => {
            const res = await axios.get('/get-riders')
            return res.data
        }
    })

    const updateRiderStatus = (rider, status) => {
        console.log(rider)

        const updateInfo = { status: status, ridersEmail : rider.riderEmail}

        axios.patch(`/approve-rider/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Rider is Approved.',
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    const handleApprove = (rider) => {
        updateRiderStatus(rider, 'approved')
    }

    const handleReject = (id) => {
        updateRiderStatus(id, 'rejected')
    }

    const handleDelete = (id) => {
        axios.delete(`/delete-rider/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Rider is Deleted.',
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    return (
        <div>
            <h2> Approve Rides : {riders.length} </h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        riders.map((rider, i) =>
                            <tr>
                                <th> {i + 1} </th>
                                <td> {rider.riderName} </td>
                                <th> {rider.riderEmail} </th>
                                <th>
                                    <p className={rider.status === 'approved' ? 'text-green-500' : 'text-red-500'}>
                                        {rider.status}
                                    </p>
                                </th>
                                <td> {rider.createdAt} </td>
                                <td>
                                    <button onClick={() => handleApprove(rider)} className='btn'>
                                        <FaUserCheck />
                                    </button>
                                    <button onClick={() => handleReject(rider._id)} className='btn m-1'>
                                        <FaUserTimes />
                                    </button>
                                    <button onClick={() => handleDelete(rider._id)} className='btn'>
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ApproveRider