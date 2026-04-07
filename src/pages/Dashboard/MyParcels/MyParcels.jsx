import React from 'react'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import UseAuth from '../../../hooks/UseAuth'
import { useQuery } from '@tanstack/react-query'

const MyParcels = () => {

    const axios = useAxiosSecurity()
    const { user } = UseAuth()

    const { data : parcell = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })

    console.log(parcell)

  return (
    <div>MyParcels : {parcell.length} </div>
  )
}

export default MyParcels