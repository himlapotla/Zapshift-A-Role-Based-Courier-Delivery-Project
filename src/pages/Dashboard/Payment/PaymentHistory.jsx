import React from 'react'
import UseAuth from '../../../hooks/UseAuth'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'
import { useQueries, useQuery } from '@tanstack/react-query'

const PaymentHistory = () => {

    const { user } = UseAuth()
    const axios = useAxiosSecurity()
    console.log(user)

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axios.get(`/see-all-payments?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                       {
                        payments.map((payment , i)  => 
                            <tr>
                            <th> {i+1} </th>
                            <td> {payment.parcelName} </td>
                            <th> ${payment.amount} </th>
                            <td> {payment.transactionId} </td>
                        </tr>
                        )
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory