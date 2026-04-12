import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'
import useAxiosSecurity from '../../../hooks/useAxiosSecurity'

const PaymentSuccess = () => {

  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const axios = useAxiosSecurity()
  
  useEffect( () => {
    if(sessionId) {
      axios.patch(`/payment-success?session_id=${sessionId}`)
      .then(res =>{
        console.log(res.data)
      })
    }
  }, [sessionId])

  return (
    <div> Your Payment is Success</div>
  )
}

export default PaymentSuccess