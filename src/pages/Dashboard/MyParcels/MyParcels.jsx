import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import UseAuth from '../../../hooks/UseAuth'
import { useQuery } from '@tanstack/react-query'
import { FiEdit } from 'react-icons/fi'
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { Link } from 'react-router'

const MyParcels = () => {

    const axios = useAxiosSecurity()
    const { user } = UseAuth()

    const { data: parcell = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/my-parcels?email=${user.email}`)
            return res.data
        }
    })

    const handelParcelDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Do you wan to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed)
                    axios.delete(`/delete-parcels/${id}`)
                        .then(res => {

                            if (res.data.deletedCount) {
                                refetch()
                                Swal.fire({
                                    title: 'Deleted',
                                    text: 'Your parcel is deleted',
                                    icon: 'success',
                                })
                            }
                        });
            });

    }

    return (
        <div className="overflow-x-auto">

            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className='bg-[#caeb66]'>
                        <th>No.</th>
                        <th>Parcel Name</th>
                        <th>Sending Cost</th>
                        <th>Payment</th>
                        <th>Delivery Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        parcell.map((p, i) =>
                            <tr >
                                <th>{i + 1}</th>
                                <td>{p.parcelName}</td>
                                <td> {p.cost} </td>

                                <td>
                                    {
                                        parcell.paymentStatus === 'paid' ?
                                            <span className='text-green-500'> Pain </span> :
                                            <Link to={`/dashboard/payment/${p._id}`}>
                                                <button className='btn btn-sm bg-[#caeb66]'> Pay </button>
                                            </Link>
                                    }
                                </td>

                                <td> payment status </td>

                                <td>
                                    <button className='btn btn-square mx-1 hover:bg-[#caeb66]'>
                                        <FaMagnifyingGlass> </FaMagnifyingGlass>
                                    </button>
                                    <button className='btn btn-square mx-1 hover:bg-[#caeb66]'>
                                        <FiEdit> </FiEdit>
                                    </button>
                                    <button onClick={() => handelParcelDelete(p._id)}
                                        // whenever it is needed to pass an arguments to an event handler, wrap it in an arrow function — otherwise React will call it immediately during render.() after a function = run it now. Without () (or wrapped in arrow) = run it later when clicked.

                                        className='btn btn-square mx-1 hover:bg-[#caeb66]'>
                                        <FaTrashCan> </FaTrashCan>
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

export default MyParcels