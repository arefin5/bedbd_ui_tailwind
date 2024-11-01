
"use client";

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [tranId, setTranId] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      setTranId(params.get('tran_id') || "");
    }
  }, []);

  // Call a function to handle post-payment actions (like updating booking status)
  useEffect(() => {
    if (tranId) {
      // Example of sending tranId to your backend for confirmation
      confirmPayment(tranId);
    }
  }, [tranId]);

  const confirmPayment = async (transactionId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/payment/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tran_id: transactionId }),
      });

      const data = await response.json();
      console.log('Payment confirmation:', data);
    } catch (error) {
      console.error('Error confirming payment:', error);
    }
  };

  return (
    <div>
      <h1>Success Page</h1>
      {tranId ? (
        <p>Transaction ID: {tranId}</p>
      ) : (
        <p>No transaction ID found.</p>
      )}
    </div>
  );
}
