import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import Loading from '../../Shared/Loading'

const Payment = () => {

    const { parcelId } = useParams()
    const axios = useAxiosSecurity()

    // here i picked that parcle by using the id.
    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axios.get(`/one-parcel/${parcelId}`)
            // console.log(res.data._id)
            return res.data
        }
    })

    const handelPayment = async () => {
        const res = await axios.post('/create-checkout-session', parcel)
        // console.log('hhyy-', res.data)
        window.location.href = res.data.url
    }

    if (isLoading) {
        return <Loading> </Loading>
    }



    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm rounded-2xl shadow-lg p-6 text-center">

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Complete Your Payment
                </h2>

                <p className="text-gray-500 mb-6">
                    Please pay for your parcel
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="font-semibold text-gray-800">
                        {parcel?.parcelName}
                    </p>

                    <p className="text-2xl font-bold mt-2">
                        ${parcel?.cost}
                    </p>
                </div>

                <button
                    onClick={handelPayment}
                    className="w-full py-3 rounded-xl font-semibold hover:opacity-90 transition"
                    style={{ backgroundColor: "#CAEB66" }}
                >
                    Pay ${parcel?.cost}
                </button>

            </div>
        </div>
    )
}

export default Payment