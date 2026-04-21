import React from 'react'
import UseAuth from './UseAuth'
import useAxiosSecurity from './useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'

const useRole = () => {

    const { user } = UseAuth()
    const axios = useAxiosSecurity()

    const { data : userRole = 'user' } = useQuery({
        queryKey: ['user-role', user.email],
        queryFn: async () => {
            const role = await axios.get(`/user-role/${user.email}`)
            return role.data.role
            // console.log('gggg--',role.data.role)
        }
    })

  return {userRole}
}

export default useRole