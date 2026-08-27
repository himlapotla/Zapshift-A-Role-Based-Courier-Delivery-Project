import React from 'react'
import UseAuth from './UseAuth'
import useAxiosSecurity from './useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'
import { data } from 'react-router'
 

const useRole = () => {

    const { user } = UseAuth()
    const axios = useAxiosSecurity()

    const { isLoading: roleLoad, data : userRole } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const role = await axios.get(`/user-role/${user.email}`)
            // console.log('tttt---', role)
            return role.data.role
        }
    })

  return {userRole, roleLoad}
}

export default useRole



// logout
//   ↓
// Auth state changes
//   ↓
// user becomes null
//   ↓
// Home/component/navbar re-renders
//   ↓
// useRole() runs again
//   ↓
// React Query and API runs again


// const role = await axios.get(`/user-role/${user?.email}`) -- When user exists then user?.email becames "abc@gmail.com" When user is null it is undefined, so response will be a bad request.