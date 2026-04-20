import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import { FiShieldOff } from 'react-icons/fi'
import { FaUserShield } from 'react-icons/fa'
import Swal from 'sweetalert2'

const UserManagement = () => {

    const axios = useAxiosSecurity()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get(`/all-users`)
            return res.data
        }
    })

    const makeAdmin = (user) => {
        const roleInfo = { role: 'admin' }
        axios.patch(`/make-admin/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'User has been updated to Admin.',
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    const removeAdmin = (user) => {
        const roleInfo = { role: 'user' }
        axios.patch(`/make-admin/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'User has been remoed from admin.',
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "OK"
                    })
                }
            })
    }

    return (
        // <div>UserManagement--{users.length}</div>
        <div>

            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th> No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Actions</th>
                            <th>Other Actions</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            users.map((usr, i) =>
                                <tr>
                                    <th>
                                        {i + 1}
                                    </th>

                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div className=" avatar mask mask-squircle h-12 w-12">
                                                <img
                                                    src={usr.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>

                                        </div>
                                    </td>

                                    <td> {usr.displayName} </td>
                                    <td> {usr.email} </td>
                                    <td> {usr.role} </td>
                                    <td>
                                        {
                                            usr.role === 'admin' ?
                                                <button className='btn bg-red-400' onClick={() => removeAdmin(usr)} > <FiShieldOff> </FiShieldOff> </button> :
                                                <button className='btn bg-green-400' onClick={() => makeAdmin(usr)} > <FaUserShield> </FaUserShield> </button>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default UserManagement