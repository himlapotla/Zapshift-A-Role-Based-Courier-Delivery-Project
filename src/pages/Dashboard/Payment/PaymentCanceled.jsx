import React from 'react'

export const PaymentCanceled = () => {
  
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center">

      <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
        <span className="text-2xl text-red-500">✕</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Payment Canceled
      </h2>

      <p className="text-gray-500 mt-2">
        Your payment was canceled. No amount was charged.
      </p>

      <button
        onClick={() => window.location.href = "/"}
        className="w-full mt-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        style={{ backgroundColor: "#CAEB66" }}
      >
        Back to Home
      </button>

    </div>
  </div>
)
}
