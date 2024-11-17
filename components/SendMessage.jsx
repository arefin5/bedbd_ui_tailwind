
"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

// const SOCKET_URL = "http://localhost:5001";
const SOCKET_URL = "http://145.223.22.239:5001";
const SendMessage = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const hostID = users._id;
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();
  const [socket, setSocket] = useState(null);
  const [authenticatedUserId, setAuthenticatedUserId] = useState(null);

  const handleOpenModal = () => {
    if (!token) {
      router.push("/login/email");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const socketInstance = io(SOCKET_URL, { transports: ['websocket'] });
    setSocket(socketInstance);

    socketInstance.emit('authenticate', token, (response) => {
      if (response.status === 'failed') {
        console.log('Authentication failed');
        return;
      }

      const userId = response.user._id;
      setAuthenticatedUserId(userId);
      socketInstance.emit('join', userId);
    });

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [token]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (socket) {
//       const senderId = socket.id; // Or retrieve it from the authenticated user token
//       const receiverId = hostID; // Host ID from the `users` prop
//       const data = {
//         senderId,
//         receiverId,
//         message,
//       };

//       socket.emit('sendMessage', data, (response) => {
//         if (response.status === 'Message delivered') {
//           console.log('Message sent successfully!');
//         } else {
//           console.error('Message delivery failed:', response.message);
//         }
//       });

//       setMessage('');
//       setIsModalOpen(false);
//     } else {
//       console.error('Socket is not connected.');
//     }
//   };
const handleSubmit = (e) => {
    e.preventDefault();
  
    if (socket) {
        
      const sender = authenticatedUserId; // MongoDB ObjectId for the user;
      const receiver = hostID; // MongoDB ObjectId for the host
      const data = { sender, receiver, message };
  
      socket.emit('sendMessage', data, (response) => {
        if (response.status === 'Message delivered') {
          console.log('Message sent successfully!');
        } else {
          console.error('Message delivery failed:', response.message);
        }
      });
  
      setMessage('');
      setIsModalOpen(false);
    }
  };
  
  return (
    <div>
      <button
        className="btn btn-secondary rounded-full max-w-56"
        onClick={handleOpenModal}
      >
        Contact Host
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-md w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full border rounded-md p-2 mb-4"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendMessage;
