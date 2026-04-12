import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import Loading from '../../Shared/Loading'

const Payment = () => {

    const { parcelId } = useParams()
    const axios = useAxiosSecurity()

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        // cache the data. So that next time do not need to all api. Here key - parcel & value - parcelId, so next time when (parcelId) this parcel's data need to be fetched tanstack will fetch that from it's cache. Simple.
        queryFn: async () => {
            const res = await axios.get(`/one-parcel/${parcelId}`)
            console.log(res.data._id)
            return res.data
        }
    })

    const handelPayment = async () => {
        const res = await axios.post('/create-checkout-session', parcel)
        console.log(res.data)
        window.location.href = res.data.url
    }

    if (isLoading) {
        return <Loading> </Loading>
    }

    return (
        <div>
            <p> Please pay ${parcel.cost} for {parcel?.parcelName} </p>
            <button onClick={handelPayment} className='btn bg-[#caeb66]'> Pay </button>
        </div>
    )
}

export default Payment