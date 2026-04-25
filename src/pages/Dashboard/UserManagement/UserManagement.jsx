import React, { useState } from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import { FiShieldOff } from 'react-icons/fi'
import { FaSearch, FaUserShield } from 'react-icons/fa'
import Swal from 'sweetalert2'
import UseAuth from '../../../hooks/UseAuth'

const UserManagement = () => {

    const axios = useAxiosSecurity()
    const { user } = UseAuth()
    const [searchText, setSearchText] = useState('')

    const { refetch, data: users = [] } = useQuery({
        // queryKey: ['my-user', ]-(this is the label) React Query stores the fetched data in memory (cache) using this label. Whenever i ask for data, it first checks — "do I already have a box(cached data - returned from queryFn) with this label?" If yes, it gives you that data instantly without making a network request. 
        // here searchText - searchText changes ✅The queryKey label changes ✅React Query sees a new label it hasn't seen before then It automatically fires a new API request instantly ✅That's why results come immediately as i typed.  
        queryKey: [searchText],
        queryFn: async () => {
            const res = await axios.get(`/all-users?searchText=${searchText}`)
            return res.data
        }
    })

    const makeAdmin = (user) => {
        const roleInfo = { role: 'admin' }
        Swal.fire({
            title: "Do you want to make this user Admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        })
            .then((result => {
                if (result.isConfirmed) {
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
            }))

    }

    const removeAdmin = (user) => {
        const roleInfo = { role: 'user' }

        Swal.fire({
            title: "Do you want to remove this user from admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        })
            .then((result => {
                if (result.isConfirmed) {
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

            }))

    }

    return (

        <div>
            <p> search text -- {searchText} </p>
            <div className='py-6 px-3'>
                <label> Search the User </label> <br />
                <input onChange={ (e) => setSearchText(e.target.value) } type="text" className="input" placeholder=' search user' />
            </div>

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