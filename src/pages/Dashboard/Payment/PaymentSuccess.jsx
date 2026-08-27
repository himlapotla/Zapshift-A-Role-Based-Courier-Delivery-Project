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
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="w-full max-w-md rounded-2xl shadow-lg p-6 text-center">

      {/* Success Icon */}
      <div
        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "#CAEB66" }}
      >
        <span className="text-3xl">✓</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Payment Successful!
      </h2>

      <p className="text-gray-500 mt-2 mb-6">
        Your payment has been completed successfully.
      </p>

      <div className="text-left bg-gray-50 rounded-xl p-4 space-y-3">
        <p>
          <span className="font-semibold">Transaction ID:</span>{" "}
          <span className="text-gray-600">{paymentInfo.transactionId}</span>
        </p>

        <p>
          <span className="font-semibold">Tracking ID:</span>{" "}
          <span className="text-gray-600">{paymentInfo.trackingId}</span>
        </p>
      </div>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-6 w-full py-3 rounded-xl font-semibold"
        style={{ backgroundColor: "#CAEB66" }}
      >
        Back to Home
      </button>

    </div>
  </div>
)
}

export default PaymentSuccess