import React, { useRef, useState } from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const AssignRider = () => {

    const axios = useAxiosSecurity()
    const riderModalRef = useRef()
    const [selectedParcel, setSelectedParcel] = useState(null)

    const { refetch : parcelRfetch, data: parcel = [] } = useQuery({
        queryKey: ['parcel', 'pending-pickup'],
        queryFn: async () => {
            const res = await axios.get(`/my-parcels?deli_statuss=pending-pickup`)
            return res.data
        }
    })

    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const rres = await axios.get(`/get-riders?status=approved&district=${selectedParcel.senderDistrict}&workStatus=available`)
            return rres.data
        }
    })

    const handlAssignRider = (rider) => {

        const assignRiderInfo = {
            rId: rider._id,
            rName: rider.riderName,
            rEmail: rider.riderEmail,
            parcelId: selectedParcel._id
        }

        axios.patch(`/update-parcel/${selectedParcel._id}`, assignRiderInfo)
            .then((res) => {
                if (res.data.modifiedCount) {
                    parcelRfetch()
                    riderModalRef.current.close()
                    Swal.fire({
                        title: 'Rider has been Assigned. ',
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    const openModal = (parcel) => {
        setSelectedParcel(parcel)
        riderModalRef.current.showModal()
    }

    return (
        <div>

            <dialog ref={riderModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>District</th>
                                <th>workStatus</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                riders.map((rider, i) =>
                                    <tr>
                                        <td> {rider.riderName} </td>
                                        <th> {rider.riderDistrict} </th>
                                        <th> {rider.workStatus} </th>
                                        <th>
                                            <button onClick={() => handlAssignRider(rider)} className='bg-[#caeb66] p-1 btn'> Assign rider </button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>

            </dialog>

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Pickup District</th>
                        <th> Created At </th>
                        <th>Delivery Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        parcel.map((p, i) =>
                            <tr>
                                <th> {i + 1} </th>
                                <td> {p.parcelName} </td>
                                <th> ${p.cost} </th>
                                <th> {p.senderDistrict} </th>
                                <th> {p.createdAt} </th>
                                <td> {p.deliveryStatus} </td>
                                <td>
                                    <button onClick={() => openModal(p)} className='bg-[#caeb66] text-black p-1 rounded-xl'>Assign Rider</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AssignRider