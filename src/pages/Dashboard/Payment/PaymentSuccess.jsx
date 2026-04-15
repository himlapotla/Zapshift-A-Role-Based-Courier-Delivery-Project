import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const axios = useAxiosSecurity()
  const [paymentInfo, setPaymentInfo] = useState({})

  useEffect(() => {
    if (sessionId) {
      axios.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data.trackingId, res.data.transactionId, res.data)
          setPaymentInfo({
            trackingId: res.data.trackingId,
            transactionId: res.data.transactionId,
          })
        })
    }
  }, [sessionId])



  return (

    <div>
      <p> Your Payment is Success </p>
      <p> Your tracsaction is Success : {paymentInfo.transactionId} </p>
      <p> Your tracking is Success : {paymentInfo.trackingId} </p>
    </div>
  )
}

export default PaymentSuccess