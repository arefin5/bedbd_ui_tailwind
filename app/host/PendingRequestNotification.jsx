
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';
import { useSelector } from "react-redux";

const SOCKET_URL = "https://backend.bedbd.com";
// const SOCKET_URL = "http://localhost:5001";

export default function PendingRequestNotification() {
  const [paymentBookings, setPaymentBookings] = useState([]);
  const [socket, setSocket] = useState(null);
  const { token } = useSelector((state) => state.auth);
  
  useEffect(() => {
  if (!token) return;  // Prevent socket connection if no token
  console.log("paymentBookings",paymentBookings)

  // Connect to the Socket.IO server
  const socketInstance = io(SOCKET_URL, {
    transports: ['websocket'],
  });

  setSocket(socketInstance);

  // Authenticate user with the token
  socketInstance.emit('authenticate', token, (response) => {
    if (response.status === 'failed') {
      console.log('Authentication failed');
      return;
    }

    // Once authenticated, join the user's room
    const userId = response.user._id;  // Assuming the user object is returned on successful authentication
    socketInstance.emit('join', userId);

    // Check for payment success bookings after authentication
    socketInstance.emit('checkPaymentStatus', userId);
  });

  // Listen for payment success bookings in real-time
  socketInstance.on('paymentSuccessBookings', (bookings) => {
    console.log("pendingrequest",bookings);

    setPaymentBookings(bookings);  // Update the state with payment success bookings
    // console.log(paymentBookings)
  });

  // Cleanup on component unmount
  return () => {
    if (socketInstance) {
      socketInstance.disconnect();
    }
  };
}, [token]);

  return (
    <div className="py-6 px-4 rounded-lg " 
    style={{
            border: '1px solid rgba(255, 255, 255, 1)', // 1px solid border with the specified color
            borderRadius: '8px', // Optional: Add rounded corners if needed
            padding: '16px', // Optional: Add padding for spacing inside the box
          }}
          >
      {paymentBookings.length > 0 ? (
        <div className='w-full h-fit text-center py-3 border-secondary-400 bg-secondary-50 rounded-lg text-neutral-400 font-semibold text-lg'>
          You have {paymentBookings.length} new payment success bookings.
          <Link href="/host/manage-booking">
            <span className='text-secondary-400 cursor-pointer'>
              click here
            </span>
          </Link> 
          to view or approve them.
        </div>
      ) : (
        <div className='w-full h-fit text-center py-3
         border-secondary-400 bg-secondary-50 rounded-lg text-neutral-400 font-semibold text-lg'>
          A booking request is pending,
          <Link href="/host/manage-booking">
            <span className='text-secondary-400 cursor-pointer'>
              click here
            </span>
          </Link>
          to approve or decline.
        </div>
      )}
    </div>
  );
}
