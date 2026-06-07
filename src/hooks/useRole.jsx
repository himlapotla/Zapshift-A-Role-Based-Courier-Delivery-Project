import React from 'react'
import UseAuth from './UseAuth'
import useAxiosSecurity from './useAxiosSecurity'
import { useQuery } from '@tanstack/react-query'

const useRole = () => {

    const { user } = UseAuth()
    const axios = useAxiosSecurity()

    const { isLoading: roleLoad, data : userRole = 'userrrr' } = useQuery({
        queryKey: ['user-role', user?.email],
        queryFn: async () => {
            const role = await axios.get(`/user-role/${user.email}`)
            return role.data.role 
        }
    })

  return {userRole, roleLoad}
}

export default useRole